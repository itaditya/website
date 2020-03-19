import Head from 'next/head';

import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import MDXHeading from '_components/MDXHeading';
import CardTwitter from '_components/CardTwitter';
import { PublishAndReadTime } from '_components/PostExtraInfo';

function LayoutBlog(props) {
  const { meta, children } = props;
  return (
    <div
      className="relative min-h-screen bg-gray-200 px-10 py-8 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 col-gap-4 font-body"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <Head>
        <title>{meta.title} | Aditya Agarwal</title>
      </Head>
      <SiteNavbar />
      <main className="col-start-2 col-span-10 xl:col-start-4 xl:col-span-6 row-auto py-8 mt-10">
        <MDXHeading className="text-5xl leading-tight" showAnchorLink={false}>
          {meta.title}
        </MDXHeading>
        <PublishAndReadTime post={{ date: '2018-04-06T00:12:00.000Z', readingTime: '10 mins' }} className="mt-3 mb-8" />
        {children}
        <span className="block mt-20"></span>
        <CardTwitter />
      </main>
      <SiteFooter />
    </div>
  );
}

export default LayoutBlog;
