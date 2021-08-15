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

function Heading2(props) {
  return <MDXHeading level={2} className="mt-16 text-xl leading-tight md:text-3xl" {...props} />;
}

function Heading3(props) {
  return <MDXHeading level={3} className="mt-10 text-lg leading-snug md:text-2xl" {...props} />;
}

function Paragraph(props) {
  return <p className="mt-4 text-gray-600 leading-7 md:text-lg md:leading-8" {...props} />;
}

function Anchor(props) {
  return (
    <a
      className="text-blue-600 underline hover:text-blue-700 visited:text-indigo-600"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

function UnorderedList(props) {
  return <ul className="mt-4 ml-8 text-gray-600 list-disc md:text-xl" {...props} />;
}

function OrderedList(props) {
  return <ol className="mt-4 ml-8 text-gray-600 list-decimal md:text-xl" {...props} />;
}

function ListItem(props) {
  return <li className="mt-2 md:text-lg" {...props} />;
}

function HorizontalRule(props) {
  return <hr className="my-16 border-gray-300" {...props} />;
}

function PreformattedText(props) {
  return <div className="mt-10 mb-4" {...props}></div>;
}

function InlineCode(props) {
  return (
    <code
      className="px-2 py-1 text-sm bg-gray-200 text-red-700 rounded-md whitespace-nowrap"
      {...props}
    />
  );
}

function BlockQuote(props) {
  return (
    <blockquote
      className="border-l-4 border-gray-700 italic pl-5 pb-1 mt-8 blogpost-blockquote"
      {...props}
    />
  );
}

const mdxComponents = {
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  a: Anchor,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  hr: HorizontalRule,
  img: MDXImage,
  pre: PreformattedText,
  code: CodeBlock,
  inlineCode: InlineCode,
  blockquote: BlockQuote,
};

function BlogLayout(props) {
  const { meta, children } = props;

  return (
    <div className="relative min-h-screen py-8 bg-gray-100 px:4 sm:px-24 lg:px-32 xl:px-40 grid grid-cols-12 grid-rows-main-fill font-body">
      <BlogHead postInfo={meta} />
      <SiteNavbar />
      <main className="py-8 mt-10 col-start-2 col-span-10 xl:col-start-4 xl:col-span-6 row-auto">
        <article>
          <MDXHeading
            level={1}
            className="text-3xl md:text-5xl md:leading-tight"
            showAnchorLink={false}
          >
            {meta.title}
          </MDXHeading>
          <PublishAndReadTime post={meta} className="mt-3 mb-8" />
          <p className="mt-4 mb-8 text-xl text-gray-600 leading-8">{meta.description}</p>
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
