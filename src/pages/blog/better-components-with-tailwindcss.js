import BlogLayout from '_components/BlogLayout';
import PostContent, { meta } from '_posts/better-components-with-tailwindcss.mdx';

meta.slug = 'better-components-with-tailwindcss';

const Post = () => {
  return (
    <BlogLayout meta={meta}>
      <PostContent />
    </BlogLayout>
  );
};

export default Post;
