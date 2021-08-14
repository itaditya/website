// @ts-check

/**
 * @typedef { import('./types/getUnpolishedPosts').getUnpolishedPostsFunc } getUnpolishedPostsFunc
 */

const contentful = require('contentful');

/** @type { getUnpolishedPostsFunc } */
const getUnpolishedPosts = (options = {}) => {
  const { loadDrafts = false } = options;

  const contentfulToken = process.env.CONTENTFUL_TOKEN;
  const contentfulPreviewToken = process.env.CONTENTFUL_PREVIEW_TOKEN;

  if (!contentfulToken || !contentfulPreviewToken) {
    return Promise.reject('Contentful Access Tokens not available');
  }

  let config = {
    space: 'd7968sjydm23',
    accessToken: contentfulToken,
  };

  if (loadDrafts) {
    Object.assign(config, {
      accessToken: contentfulPreviewToken,
      host: 'preview.contentful.com',
    });
  }

  const client = contentful.createClient(config);

  return new Promise((resolve, reject) => {
    client
      .getEntries()
      .then((response) => {
        const { items } = response;

        const unpolishedPosts = items.map((item) => {
          return {
            id: item.sys.id,
            date: item.sys.updatedAt,
            ...item.fields,
          };
        });
        resolve(unpolishedPosts);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};

export default getUnpolishedPosts;
