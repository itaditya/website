import Head from 'next/head';

import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';

export default function MDXLayout(props) {
  const { children, ...restProps } = props;
  return (
    <div
      className="relative min-h-screen bg-gray-200 px-10 py-8 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 col-gap-4 font-body"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
      {...restProps}
    >
      <Head>
        <title>Blog | Aditya Agarwal</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <SiteNavbar />
      <main className="col-start-2 col-span-10 xl:col-start-4 xl:col-span-6 row-auto py-8 mt-10">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
