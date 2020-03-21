import React, { useState, useEffect } from 'react';

function generateTwitterUrl(meta) {
  const { title } = meta;
  const postLink = window.location.href;
  const twitterUrl = `https://twitter.com/intent/tweet?text=Read "${title}" by @dev__adi. ${postLink}`;
  return twitterUrl;
}

export function TwitterShare(props) {
  const { meta } = props;
  const [stateTwitterUrl, setStateTwitterUrl] = useState('https://twitter.com/dev__adi');

  useEffect(() => {
    const twitterUrl = generateTwitterUrl(meta);
    setStateTwitterUrl(twitterUrl);
  }, []);

  return (
    <a
      href={stateTwitterUrl}
      className="underline text-blue-600 hover:text-blue-700 visited:text-indigo-800"
      style={{ textDecorationColor: 'currentColor' }}
      target="_blank"
      rel="noopener noreferrer"
      children="share it on Twitter"
      {...props}
    />
  );
}
