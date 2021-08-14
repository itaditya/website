// @ts-check

/**
 * @typedef { import('_types/posts').UnpolishedPostsList } UnpolishedPostsList
 */

import { useState, useEffect } from 'react';
import Unpolished from '_components/Unpolished';
import getUnpolishedPosts from '_utils/getUnpolishedPosts';

/** @type { UnpolishedPostsList } */
const initialState = [];

function UnpolishedDrafts() {
  const [statePosts, setStatePosts] = useState(initialState);

  useEffect(() => {
    (async () => {
      const posts = await getUnpolishedPosts({ loadDrafts: true });
      setStatePosts(posts);
    })();
  }, []);

  return <Unpolished posts={statePosts} />;
}

export default UnpolishedDrafts;
