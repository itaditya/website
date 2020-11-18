// This file is auto-generated. Please don't edit it manually.
export default function getPosts() {
  const filePromise = [];

    filePromise.push(new Promise(resolve => {
      import('_posts/10-mongo-things-i-wished-i-knew.mdx').then(data => {
        resolve(data.meta);
      });
    }))
  
    filePromise.push(new Promise(resolve => {
      import('_posts/async-await-hell.mdx').then(data => {
        resolve(data.meta);
      });
    }))
  
    filePromise.push(new Promise(resolve => {
      import('_posts/better-components-with-tailwindcss.mdx').then(data => {
        resolve(data.meta);
      });
    }))
  
    filePromise.push(new Promise(resolve => {
      import('_posts/design-systems-react-buttons-base-variant.mdx').then(data => {
        resolve(data.meta);
      });
    }))
  
    filePromise.push(new Promise(resolve => {
      import('_posts/named-args.mdx').then(data => {
        resolve(data.meta);
      });
    }))
  
    filePromise.push(new Promise(resolve => {
      import('_posts/optimize-your-react-app-with-react-memo.mdx').then(data => {
        resolve(data.meta);
      });
    }))
  
    filePromise.push(new Promise(resolve => {
      import('_posts/react-renderprops-hoc.mdx').then(data => {
        resolve(data.meta);
      });
    }))
  
return Promise.all(filePromise);
}

