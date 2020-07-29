import BlogLayout from '_components/BlogLayout';
import PostContent, { meta } from '_posts/named-args.mdx';

meta.slug = 'named-args';

const Post = () => {
  return (
    <BlogLayout meta={meta}>
      <PostContent />
    </BlogLayout>
  );
};

export default Post;
