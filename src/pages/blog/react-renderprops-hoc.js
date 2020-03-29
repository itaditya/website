import BlogLayout from '_components/BlogLayout';
import PostContent, { meta } from '_posts/react-renderprops-hoc.mdx';

meta.slug = 'react-renderprops-hoc';

const Post = () => {
  return (
    <BlogLayout meta={meta}>
      <PostContent />
    </BlogLayout>
  );
};

export default Post;
