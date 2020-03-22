import { useEffect } from 'react';
import Router from 'next/router';

import { setupMetrics, collectMetrics } from '_utils/tracking';

import '../css/tailwind.css';
import '../css/style.css';

const handleRouteChange = url => {
  collectMetrics({
    type: 'navigation',
    path: url,
    fromPath: Router.pathname,
  });
};

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setupMetrics();
    collectMetrics({
      type: 'entry',
      path: Router.pathname,
    });
    Router.events.on('routeChangeStart', handleRouteChange);
  }, []);

  return <Component {...pageProps} />;
}
