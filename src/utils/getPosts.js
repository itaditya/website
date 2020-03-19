
export default function getPosts() {
  const filePromise = [];

    filePromise.push(new Promise(resolve => {
      import('_posts/async-await-hell.mdx').then(data => {
        const completeMeta = {
          ...data.meta,
          slug: 'async-await-hell',
        }
        resolve(completeMeta);
      });
    }))
  
    filePromise.push(new Promise(resolve => {
      import('_posts/better-components-with-tailwindcss.mdx').then(data => {
        const completeMeta = {
          ...data.meta,
          slug: 'better-components-with-tailwindcss',
        }
        resolve(completeMeta);
      });
    }))
  
return Promise.all(filePromise);
}

