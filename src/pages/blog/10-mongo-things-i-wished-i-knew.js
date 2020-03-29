import BlogLayout from '_components/BlogLayout';
import PostContent, { meta } from '_posts/10-mongo-things-i-wished-i-knew.mdx';

meta.slug = '10-mongo-things-i-wished-i-knew';

const Post = () => {
  return (
    <BlogLayout meta={meta}>
      <PostContent />
    </BlogLayout>
  );
};

export default Post;
