import LayoutBlog from '_components/LayoutBlog';
import PostContent, { meta } from '_posts/async-await-hell.mdx';

meta.slug = 'async-await-hell';

const Post = () => {
  return (
    <LayoutBlog meta={meta}>
      <PostContent />
    </LayoutBlog>
  );
};

export default Post;
