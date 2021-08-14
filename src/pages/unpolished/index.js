// @ts-check

/**
 * @typedef { import('next').GetStaticProps } GetStaticProps
 */

import Unpolished from '_components/Unpolished';
import getUnpolishedPosts from '_utils/getUnpolishedPosts';

/** @type { GetStaticProps } */
export async function getStaticProps() {
  const posts = await getUnpolishedPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Unpolished;
