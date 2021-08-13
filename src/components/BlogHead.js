import Head from 'next/head';
import myDetails from '../staticData/myDetails.json';

export default function BlogHead(props) {
  const { postInfo } = props;
  const { slug, title, description, canonicalUrl, readingTime } = postInfo;
  const { websiteUrl } = myDetails;

  const postUrl = `${websiteUrl}/blog/${slug}`;
  const previewPicUrl = `${websiteUrl}/previews/${slug}.jpg`;
  const readInfo = `${readingTime} read`;

  return (
    <Head>
      <title>{title} | Aditya Agarwal</title>
      <meta property="article:author" content="https://twitter.com/dev__adi"></meta>
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Aditya Agarwal" />
      <meta property="og:url" content={postUrl} />
      <meta property="og:image" content={previewPicUrl} />
      <meta property="fb:app_id" content="1790148541282728" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dev__adi" />
      <meta name="twitter:creator" content="@dev__adi" />
      <meta name="twitter:url" content={postUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image:src" content={previewPicUrl} />
      <meta name="twitter:label1" value="Reading time" />
      <meta name="twitter:data1" value={readInfo} />
      <meta name="twitter:label2" value="Authored By" />
      <meta name="twitter:data2" value="@dev__adi" />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
    </Head>
  );
}
