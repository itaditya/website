const path = require('path');
const fs = require('fs');
const util = require('util');

const readdir = util.promisify(fs.readdir);

(async () => {
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const files = await readdir(postsDirectory);

  let string = `
export default function getPosts() {
  const filePromise = [];
`;

  files.forEach(file => {
    const { name } = path.parse(file);
    string += `
    filePromise.push(new Promise(resolve => {
      import('_posts/${file}').then(data => {
        const completeMeta = {
          ...data.meta,
          slug: '${name}',
        }
        resolve(completeMeta);
      });
    }))
  `;
  });

  string += `
return Promise.all(filePromise);
}
`;

  console.log(string);
})();
