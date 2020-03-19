import LayoutBlog from '_components/LayoutBlog';
import PostContent, { meta } from '_posts/first-post.mdx';

meta.slug = 'first-post';

const Post = () => {
  return (
    <LayoutBlog meta={meta}>
      <PostContent />
    </LayoutBlog>
  );
};

export default Post;
