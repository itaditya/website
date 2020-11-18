const path = require('path');
const fs = require('fs');
const util = require('util');

const readdir = util.promisify(fs.readdir);

(async () => {
  const postsDirectory = path.join(process.cwd(), 'src', 'pages', 'blog');
  const files = await readdir(postsDirectory);
  const fileMdx = files.filter((file) => file.endsWith('.mdx'));

  let string = `
export default function getPosts() {
  const filePromise = [];
`;

  fileMdx.forEach((file) => {
    string += `
    filePromise.push(new Promise(resolve => {
      import('_posts/${file}').then(data => {
        resolve(data.meta);
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
