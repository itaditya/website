const fs = require('fs');

const slug = process.argv[2];

if(!slug) {
  console.error('Please provide slug for blog.');
  process.exit(1);
}

const string = `import BlogLayout from '_components/BlogLayout';
import PostContent, { meta } from '_posts/${slug}.mdx';

meta.slug = '${slug}';

const Post = () => {
  return (
    <BlogLayout meta={meta}>
      <PostContent />
    </BlogLayout>
  );
};

export default Post;
`;

fs.writeFile(`src/pages/blog/${slug}.js`, string, (error) => {
  if(error) {
    console.error('File creation failed');
  }
});
