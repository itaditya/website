import { MDXProvider } from '@mdx-js/react';

import SiteNavbar from '_components/SiteNavbar';
import SiteFooter from '_components/SiteFooter';
import BlogHead from '_components/BlogHead';
import MDXHeading from '_components/MDXHeading';
import MDXImage from '_components/MDXImage';
import CodeBlock from '_components/CodeBlock';
import CardTwitter from '_components/CardTwitter';
import { PostNextRead } from '_components/PostsSuggestion';
import { PublishAndReadTime } from '_components/PostExtraInfo';

const mdxComponents = {
  h1: props => <MDXHeading level={1} className="text-lg md:text-5xl md:leading-5" showAnchorLink={false} {...props} />,
  h2: props => <MDXHeading level={2} className="mt-16 text-xl leading-tight md:text-3xl" {...props}></MDXHeading>,
  h3: props => <MDXHeading level={3} className="mt-10 text-lg leading-snug md:text-2xl" {...props}></MDXHeading>,
  p: props => <p className="mt-4 text-gray-600 md:text-lg md:leading-8" {...props}></p>,
  a: props => (
    <a
      className="text-blue-600 underline hover:text-blue-700 visited:text-indigo-800"
      style={{ textDecorationColor: 'currentColor' }}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    ></a>
  ),
  ul: props => <ul className="mt-4 ml-8 text-gray-600 list-disc md:text-xl" {...props}></ul>,
  ol: props => <ol className="mt-4 ml-8 text-gray-600 list-decimal md:text-xl" {...props}></ol>,
  li: props => <li className="mt-2 md:text-lg" {...props}></li>,
  hr: props => <hr className="my-16 border-gray-300" {...props}></hr>,
  img: MDXImage,
  pre: props => <div className="mt-10 mb-4" {...props}></div>,
  code: CodeBlock,
  inlineCode: props => (
    <code
      className="px-2 py-1 text-sm bg-gray-200 text-red-700 rounded-md whitespace-nowrap"
      {...props}
    ></code>
  ),
};

function BlogLayout(props) {
  const { meta, children } = props;

  return (
    <div
      className="relative min-h-screen py-8 bg-gray-100 px:4 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 font-body"
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      <BlogHead postInfo={meta} />
      <SiteNavbar />
      <main className="py-8 mt-10 col-start-2 col-span-10 xl:col-start-4 xl:col-span-6 row-auto">
        <article>
          <MDXHeading level={1} className="text-3xl md:text-5xl md:leading-tight" showAnchorLink={false}>
            {meta.title}
          </MDXHeading>
          <PublishAndReadTime post={meta} className="mt-3 mb-8" />
          <p className="mt-4 mb-8 text-xl text-gray-600">{meta.description}</p>
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
