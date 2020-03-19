const fs = require('fs');

const slug = process.argv[2];

if(!slug) {
  console.error('Please provide slug for blog.');
  process.exit(1);
}

const string = `import LayoutBlog from '_components/LayoutBlog';
import PostContent, { meta } from '_posts/${slug}.mdx';

const Post = () => {
  return (
    <LayoutBlog meta={meta}>
      <PostContent />
    </LayoutBlog>
  );
};

export default Post;
`;

fs.writeFile(`src/pages/blog/${slug}.js`, string, (error) => {
  if(error) {
    console.error('File creation failed');
  }
});
