import nanoid from 'nanoid';

let metrics = [];

function sendMetrics(sessionId) {
  if (metrics.length === 0) {
    return;
  }
  fetch(`/api/metrics`, {
    method: 'POST',
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
      console.log('metrics sent');
    })
    .catch(() => {
      console.log('metrics failed');
    });
}

export function setupMetrics() {
  const sessionId = nanoid(10);
  setInterval(() => {
    sendMetrics(sessionId);
  }, 10000);
}

export function collectMetrics(metric) {
  metrics.push(metric);
}
