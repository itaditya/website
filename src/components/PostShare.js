import React, { useState, useEffect } from 'react';

function generateTwitterUrl() {
  const postLink = window.location.href;
  const twitterUrl = `https://twitter.com/intent/tweet?text=Read this article by @dev__adi. ${postLink}`;
  return twitterUrl;
}

export function TwitterShare(props) {
  const [stateTwitterUrl, setStateTwitterUrl] = useState('https://twitter.com/dev__adi');

  useEffect(() => {
    const twitterUrl = generateTwitterUrl();
    setStateTwitterUrl(twitterUrl);
  }, []);

  return (
    <a
      href={stateTwitterUrl}
      className="underline text-blue-600 hover:text-blue-700 visited:text-indigo-800"
      style={{ textDecorationColor: 'currentColor' }}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      share it on Twitter
    </a>
  );
}
