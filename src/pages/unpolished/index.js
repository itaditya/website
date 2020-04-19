import Unpolished from '_components/Unpolished';
import getUnpolishedPosts from '_utils/getUnpolishedPosts';

export async function getStaticProps() {
  const posts = await getUnpolishedPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Unpolished;
