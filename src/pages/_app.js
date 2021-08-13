import { useMetrics } from '_utils/tracking';
import { useNormalScrollRoutes } from '_utils/scrollUtils';

import '../css/tailwind.css';
import '../css/style.css';

function MyApp({ Component, pageProps }) {
  useMetrics();
  useNormalScrollRoutes();
  return <Component {...pageProps} />;
}

export default MyApp;
