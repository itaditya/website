import LayoutBlog from '_components/LayoutBlog';
import PostContent, { meta } from '_posts/react-renderprops-hoc.mdx';

meta.slug = 'react-renderprops-hoc';

const Post = () => {
  return (
    <LayoutBlog meta={meta}>
      <PostContent />
    </LayoutBlog>
  );
};

export default Post;
