
export default function getPosts() {
  const filePromise = [];

    filePromise.push(new Promise(resolve => {
      import('_posts/10-mongo-things-i-wished-i-knew.mdx').then(data => {
        const completeMeta = {
          ...data.meta,
          slug: '10-mongo-things-i-wished-i-knew',
        }
        resolve(completeMeta);
      });
    }))
  
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
  
    filePromise.push(new Promise(resolve => {
      import('_posts/optimize-your-react-app-with-react-memo.mdx').then(data => {
        const completeMeta = {
          ...data.meta,
          slug: 'optimize-your-react-app-with-react-memo',
        }
        resolve(completeMeta);
      });
    }))
  
    filePromise.push(new Promise(resolve => {
      import('_posts/react-renderprops-hoc.mdx').then(data => {
        const completeMeta = {
          ...data.meta,
          slug: 'react-renderprops-hoc',
        }
        resolve(completeMeta);
      });
    }))
  
return Promise.all(filePromise);
}

