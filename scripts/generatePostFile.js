const fs = require('fs');

const slug = process.argv[2];

if(!slug) {
  console.error('Please provide slug for blog.');
  process.exit(1);
}

const date = new Date();
const strDate = date.toISOString();

const strMdx = `import BlogLayout from '_components/BlogLayout';
import MDXImage from '_components/MDXImage';
import { TwitterShare } from '_components/PostShare';
import CodeDescription from '_components/CodeDescription';

export const meta = {
  title: '',
  slug: '${slug}',
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

export default function Post({ children }) {
  return <BlogLayout meta={meta}>{children}</BlogLayout>;
}`;

fs.writeFile(`src/pages/blog/${slug}.mdx`, strMdx, (error) => {
  if(error) {
    console.error('File creation failed');
  }
});
