const faunadb = require('faunadb');

const { query: q, PageHelper } = faunadb;

const { FAUNADB_SERVER_SECRET } = process.env;

let client;

if (FAUNADB_SERVER_SECRET) {
  client = new faunadb.Client({ secret: FAUNADB_SERVER_SECRET });
}

function sortFlows(flows) {
  const f = Object.entries(flows);
  const arr = f.sort((a, b) => {
    const x = a[0].split('->')[0].trim()
    const y = b[0].split('->')[0].trim()
    if(x === y) {
      return b[1] - a[1]
    }
    if(a[0] > b[0]) {
      return 1;
    }
    return -1;
  });

  return arr;
}

async function getPageViews(client) {
  let views = {};
  let flows = {};
  const page = new PageHelper(client, q.Match(q.Index('pageflows_index')), { size: 80 });
  await page
    .map(p => {
      return q.Get(p);
    })
    .each(p => {
      p.forEach(i => {
        i.data.metrics.forEach(m => {
          const { type, path, fromPath } = m;
          if(!views[path]) {
            views[path] = {
              entry: 0,
              navigation: 0,
            };
          }
          views[path][type] += 1;
          if(!fromPath) {
            return;
          }
          const flow = `${fromPath} -> ${path}`;
          flows[flow] = flows[flow] || 0;
          flows[flow] += 1;
        });
      });
    });

  const sortedFlows = sortFlows(flows);
  return { views, flows: sortedFlows };
}

exports.handler = async (event, context, callback) => {
  try {
    if (!client) {
      throw new Error('DataBase connection failed');
    }

    const { views, flows } = await getPageViews(client);

    return callback(null, {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'success',
        data: { views, flows },
      }),
    });
  } catch (error) {
    console.log(error);
    return callback(null, {
      statusCode: 500,
      body: JSON.stringify({
        message: 'failed',
      }),
    });
  }
};
