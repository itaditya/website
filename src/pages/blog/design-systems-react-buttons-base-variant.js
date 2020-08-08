import BlogLayout from '_components/BlogLayout';
import PostContent, { meta } from '_posts/design-systems-react-buttons-base-variant.mdx';

meta.slug = 'design-systems-react-buttons-base-variant';

const Post = () => {
  return (
    <BlogLayout meta={meta}>
      <PostContent />
    </BlogLayout>
  );
};

export default Post;
