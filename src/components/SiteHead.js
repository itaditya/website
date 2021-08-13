import Head from 'next/head';

export default function SiteHead(props) {
  const { pageName = 'Home', children } = props;

  return (
    <Head>
      <title>{pageName} | Aditya Agarwal</title>
      <meta name="description" content="Frontend Developer based in Bangalore with experience of building modern apps with React" />
      {children}
    </Head>
  );
}
