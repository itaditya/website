import LayoutBlog from '_components/LayoutBlog';
import PostContent, { meta } from '_posts/better-components-with-tailwindcss.mdx';

meta.slug = 'better-components-with-tailwindcss';

const Post = () => {
  return (
    <LayoutBlog meta={meta}>
      <PostContent />
    </LayoutBlog>
  );
};

export default Post;
