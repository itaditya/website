import { Fragment } from 'react';
import Head from 'next/head';

export default function MDXLayout(props) {
  const { children } = props;
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </Fragment>
  );
}
