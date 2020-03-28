const faunadb = require('faunadb');

const { query: q } = faunadb;

const { FAUNADB_SERVER_SECRET } = process.env;

let client;

if (FAUNADB_SERVER_SECRET) {
  client = new faunadb.Client({ secret: FAUNADB_SERVER_SECRET });
}

exports.handler = async (event, context, callback) => {
  try {
    if (!client) {
      throw new Error('DataBase connection failed');
    }

    const { sessionId, metrics } = JSON.parse(event.body);

    await client.query(
      q.If(
        q.Exists(q.Match(q.Index('pageflows_index'), sessionId)),
        q.Update(q.Select('ref', q.Get(q.Match(q.Index('pageflows_index'), sessionId))), {
          data: {
            metrics: q.Prepend(
              q.Select(['data', 'metrics'], q.Get(q.Match(q.Index('pageflows_index'), sessionId))),
              metrics,
            ),
          },
        }),
        q.Create(q.Collection('PageFlows'), {
          data: {
            sessionId,
            metrics,
          },
        }),
      ),
    );

    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: 'success',
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
