import Head from 'next/head';

export default function SiteHead(props) {
  const { pageName = 'Home', children } = props;
  return (
    <Head>
      <title>{pageName} | Aditya Agarwal</title>
      <meta name="description" content="Frontend Developer based in Bangalore with experience of building modern apps with React" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      {children}
      {/* <script async src="https://unpkg.com/thesemetrics@latest"></script> */}
    </Head>
  );
}
