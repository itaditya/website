import myDetails from '_staticData/myDetails.json';

function generateTwitterUrl(meta) {
  const { title, slug } = meta;
  const { websiteUrl } = myDetails;

  const postUrl = `${websiteUrl}/blog/${slug}`;
  const tweetPlainContent = `Read "${title}" by @dev__adi.\n\n${postUrl}`;
  const tweetContent = encodeURIComponent(tweetPlainContent);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetContent}`;

  return twitterUrl;
}

export function TwitterShare(props) {
  const { meta } = props;
  const twitterUrl = generateTwitterUrl(meta);

  return (
    <a
      href={twitterUrl}
      className="text-blue-600 underline hover:text-blue-700 visited:text-indigo-600"
      target="_blank"
      rel="noopener noreferrer"
      children="share it on Twitter"
      {...props}
    />
  );
}
