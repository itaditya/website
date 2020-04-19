import { useState, useEffect } from 'react';
import Unpolished from '_components/Unpolished';
import getUnpolishedPosts from '_utils/getUnpolishedPosts';

function UnpolishedDrafts() {
  const [statePosts, setStatePosts] = useState([]);
  useEffect(() => {
    (async () => {
      const posts = await getUnpolishedPosts({ loadDrafts: true });
      setStatePosts(posts);
    })();
  }, []);

  return <Unpolished posts={statePosts} />;
}

export default UnpolishedDrafts;
