const contentful = require('contentful');

function getUnpolishedPosts({ loadDrafts = false } = {}) {
  let config = {
    space: 'd7968sjydm23',
    accessToken: process.env.CONTENTFUL_TOKEN,
  };

  if (loadDrafts) {
    Object.assign(config, {
      accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      host: 'preview.contentful.com',
    });
  }

  const client = contentful.createClient(config);

  return new Promise((resolve, reject) => {
    client
      .getEntries()
      .then((response) => {
        let { items } = response;
        items = items.map((item) => {
          return {
            id: item.sys.id,
            date: item.sys.updatedAt,
            ...item.fields,
          };
        });
        resolve(items);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
}

export default getUnpolishedPosts;
