import { MDXProvider } from '@mdx-js/react';

import MDXLayout from '_components/MDXLayout';
import CodeBlock from '_components/CodeBlock';

import '../css/tailwind.css';
import '../css/style.css';

const mdxComponents = {
  h1: (props) => <h1 className="text-5xl text-gray-800 font-bold font-heading leading-tight mb-4" {...props}></h1>,
  h2: (props) => <h2 className="text-3xl text-gray-800 font-bold font-heading leading-tight mb-4" {...props}></h2>,
  h3: (props) => <h3 className="text-2xl text-gray-800 font-bold font-heading leading-snug mb-4" {...props}></h3>,
  p: (props) => <p className="text-lg text-gray-700 mb-8" {...props}></p>,
  pre: props => <div {...props} />,
  code: CodeBlock,
  wrapper: MDXLayout,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={mdxComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}
