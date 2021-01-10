import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import nanoid from 'nanoid';

let metrics = [];
let intervalId;

function sendMetrics(sessionId) {
  if (metrics.length === 0) {
    return;
  }
  fetch(`/.netlify/functions/metrics`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      sessionId,
      metrics,
    }),
  })
    .then(res => {
      metrics = [];
      if (!res.ok) {
        throw new Error('Api Error');
      }
    })
    .catch(() => {
      clearInterval(intervalId);
    });
}

export function setupMetrics() {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  const sessionId = nanoid(10);
  intervalId = setInterval(() => {
    sendMetrics(sessionId);
  }, 10000);
}

export function collectMetrics(metric) {
  const d = new Date();
  metric.createdAt = d.toISOString();
  metrics.push(metric);
}

export function useMetrics() {
  const router = useRouter();

  useEffect(() => {
    setupMetrics();
    collectMetrics({
      type: 'entry',
      path: Router.pathname, // avoid stale closures
    });
    router.events.on('routeChangeStart', (url) => {
      collectMetrics({
        type: 'navigation',
        path: url,
        fromPath: Router.pathname, // avoid stale closures
      });
    });
  }, []);
}
