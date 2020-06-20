import BlogLayout from '_components/BlogLayout';
import PostContent, { meta } from '_posts/optimize-your-react-app-with-react-memo.mdx';

meta.slug = 'optimize-your-react-app-with-react-memo';

const Post = () => {
  return (
    <BlogLayout meta={meta}>
      <PostContent />
    </BlogLayout>
  );
};

export default Post;
