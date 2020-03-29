import Head from 'next/head';

export default function SiteHead(props) {
  const { pageName = 'Home' } = props;
  return (
    <Head>
      <title>{pageName} | Aditya Agarwal</title>
      <meta name="description" content="Personal Website of a frontend developer working with React.js" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
