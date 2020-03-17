import { MDXProvider } from '@mdx-js/react';

import MDXLayout from '_components/MDXLayout';
import MDXHeading from '_components/MDXHeading';
import CodeBlock from '_components/CodeBlock';

import '../css/tailwind.css';
import '../css/style.css';

const mdxComponents = {
  h1: props => <MDXHeading level={1} className="text-5xl leading-tight" {...props} />,
  h2: props => <MDXHeading level={2} className="text-3xl leading-tight mt-16" {...props}></MDXHeading>,
  h3: props => <MDXHeading level={3} className="text-2xl leading-snug mt-10" {...props}></MDXHeading>,
  p: props => <p className="text-lg text-gray-700 mt-4" {...props}></p>,
  pre: props => <div className="mt-16 mb-4" {...props}></div>,
  code: CodeBlock,
  inlineCode: props => <code className="bg-gray-300 rounded-md py-1 px-2" style={{ color: 'hsl(0, 81%, 49.8%)' }} {...props}></code>,
  wrapper: MDXLayout,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={mdxComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
