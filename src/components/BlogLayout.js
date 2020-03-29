import { MDXProvider } from '@mdx-js/react';

import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import BlogHead from '_components/BlogHead';
import MDXHeading from '_components/MDXHeading';
import MDXImage from '_components/MDXImage';
import MDXWrapper from '_components/MDXWrapper';
import CodeBlock from '_components/CodeBlock';
import CardTwitter from '_components/CardTwitter';
import { PostNextRead } from '_components/PostsSuggestion';
import { PublishAndReadTime } from '_components/PostExtraInfo';

const mdxComponents = {
  h1: props => <MDXHeading level={1} className="text-lg md:text-5xl leading-tight" showAnchorLink={false} {...props} />,
  h2: props => <MDXHeading level={2} className="text-xl md:text-3xl leading-tight mt-16" {...props}></MDXHeading>,
  h3: props => <MDXHeading level={3} className="text-lg md:text-2xl leading-snug mt-10" {...props}></MDXHeading>,
  p: props => <p className="text-base md:text-xl text-gray-700 mt-4" {...props}></p>,
  a: props => (
    <a
      className="underline text-blue-600 hover:text-blue-700 visited:text-indigo-800"
      style={{ textDecorationColor: 'currentColor' }}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    ></a>
  ),
  ul: props => <ul className="mt-4 ml-8 list-disc text-base md:text-xl text-gray-700" {...props}></ul>,
  ol: props => <ol className="mt-4 ml-8 list-decimal text-base md:text-xl text-gray-700" {...props}></ol>,
  li: props => <li className="mt-2" {...props}></li>,
  hr: props => <hr className="my-16 border-gray-400" {...props}></hr>,
  img: MDXImage,
  pre: props => <div className="mt-16 mb-4" {...props}></div>,
  code: CodeBlock,
  inlineCode: props => (
    <code
      className="bg-gray-300 rounded-md py-1 px-2 text-base"
      style={{ color: 'hsl(0, 61%, 45.8%)' }}
      {...props}
    ></code>
  ),
  wrapper: MDXWrapper,
};

function BlogLayout(props) {
  const { meta, children } = props;

  return (
    <div
      className="relative min-h-screen bg-gray-200 px-4 py-8 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 col-gap-4 font-body"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <BlogHead postInfo={meta} />
      <SiteNavbar />
      <main className="col-start-2 col-span-10 xl:col-start-4 xl:col-span-6 row-auto py-8 mt-10">
        <article>
          <MDXHeading level={1} className="text-3xl md:text-5xl leading-tight" showAnchorLink={false}>
            {meta.title}
          </MDXHeading>
          <PublishAndReadTime post={meta} className="mt-3 mb-8" />
          <p className="text-xl text-gray-600 mt-4 mb-8">{meta.description}</p>
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </article>
        <span className="block mt-20"></span>
        <CardTwitter />
        <PostNextRead currentPostSlug={meta.slug} />
      </main>
      <SiteFooter />
    </div>
  );
}

export default BlogLayout;
