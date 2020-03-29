import BlogLayout from '_components/BlogLayout';
import PostContent, { meta } from '_posts/async-await-hell.mdx';

meta.slug = 'async-await-hell';

const Post = () => {
  return (
    <BlogLayout meta={meta}>
      <PostContent />
    </BlogLayout>
  );
};

export default Post;
