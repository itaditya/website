import Head from 'next/head';

export default function BlogHead(props) {
  const { postInfo } = props;

  const postUrl = 'https://devadi.netlify.app/blog/' + postInfo.slug;
  const imageUrl = postInfo.previewPicUrl || postInfo.coverPicUrl;

  return (
    <Head>
      <title>{postInfo.title} | Aditya Agarwal</title>
      <meta property="article:author" content="https://twitter.com/dev__adi"></meta>
      <meta name="description" content={postInfo.description} />
      <meta property="og:description" content={postInfo.description} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Aditya Agarwal" />
      <meta property="og:url" content={postUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="fb:app_id" content="1790148541282728" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dev__adi" />
      <meta name="twitter:creator" content="@dev__adi" />
      <meta name="twitter:url" content={postUrl} />
      <meta name="twitter:title" content={postInfo.title} />
      <meta name="twitter:image:src" content={imageUrl} />
      <meta name="twitter:label1" value="Reading time" />
      <meta name="twitter:data1" value={`${postInfo.readingTime} read`} />
      <meta name="twitter:label2" value="Authored By" />
      <meta name="twitter:data2" value="@dev__adi" />
      <link rel="canonical" href={postInfo.canonicalUrl} />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <script async src="https://unpkg.com/thesemetrics@latest"></script>
    </Head>
  );
}
