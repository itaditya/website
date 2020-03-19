import LayoutBlog from '_components/LayoutBlog';
import PostContent, { meta } from '_posts/10-mongo-things-i-wished-i-knew.mdx';

meta.slug = '10-mongo-things-i-wished-i-knew';

const Post = () => {
  return (
    <LayoutBlog meta={meta}>
      <PostContent />
    </LayoutBlog>
  );
};

export default Post;
