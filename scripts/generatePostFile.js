const fs = require('fs');

const slug = process.argv[2];

if(!slug) {
  console.error('Please provide slug for blog.');
  process.exit(1);
}

const date = new Date();
const strDate = date.toISOString();

const strMdx = `import MDXImage from '_components/MDXImage';
import { TwitterShare } from '_components/PostShare';
import CodeDescription from '_components/CodeDescription';

export const meta = {
  title: '',
  date: '${strDate}',
  description: '',
  readingTime: '6 mins',
  previewPicUrl: 'https://devadi.netlify.app/previews/${slug}.jpg',
  coverPicUrl: '/covers/${slug}.jpg',
  canonicalUrl: '',
  tags: [],
};

<MDXImage alt="" src={meta.coverPicUrl} />

## First Heading

<CodeDescription children="Fetch products to show in a list to users" />

<TwitterShare meta={meta} children="share this article on Twitter" />.
`;

const strComp = `import BlogLayout from '_components/BlogLayout';
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

fs.writeFile(`src/posts/${slug}.mdx`, strMdx, (error) => {
  if(error) {
    console.error('File creation failed');
  }
});

fs.writeFile(`src/pages/blog/${slug}.js`, strComp, (error) => {
  if(error) {
    console.error('File creation failed');
  }
});
