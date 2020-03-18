import { Fragment } from 'react';
import { MDXProvider } from '@mdx-js/react';

import MDXLayout from '_components/MDXLayout';
import MDXHeading from '_components/MDXHeading';
import CodeBlock from '_components/CodeBlock';

import '../css/tailwind.css';
import '../css/style.css';

const mdxComponents = {
  h1: props => <MDXHeading level={1} className="text-5xl leading-tight" showAnchorLink={false} {...props} />,
  h2: props => <MDXHeading level={2} className="text-3xl leading-tight mt-16" {...props}></MDXHeading>,
  h3: props => <MDXHeading level={3} className="text-2xl leading-snug mt-10" {...props}></MDXHeading>,
  p: props => <p className="text-xl text-gray-700 mt-4" {...props}></p>,
  a: props => (
    <a
      className="underline text-blue-600 hover:text-blue-700 visited:text-indigo-800"
      style={{ textDecorationColor: 'currentColor' }}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    ></a>
  ),
  ul: props => <ul className="mt-4 ml-4 list-disc list-inside text-xl text-gray-700" {...props}></ul>,
  ol: props => <ol className="mt-4 ml-4 list-decimal list-inside text-xl text-gray-700" {...props}></ol>,
  li: props => <li className="mt-2" {...props}></li>,
  hr: props => <hr className="my-16 border-gray-400" {...props}></hr>,
  img: props => (
    <Fragment>
      <img className="rounded-md mt-16" src={props.src} />
      <span className="block text-base text-center text-gray-700 mb-8 mt-4">
        {props.alt}
      </span>
    </Fragment>
  ),
  pre: props => <div className="mt-16 mb-4" {...props}></div>,
  code: CodeBlock,
  inlineCode: props => (
    <code
      className="bg-gray-300 rounded-md py-1 px-2 text-base"
      style={{ color: 'hsl(0, 61%, 45.8%)' }}
      {...props}
    ></code>
  ),
  wrapper: MDXLayout,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={mdxComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
