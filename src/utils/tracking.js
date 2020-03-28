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
      console.log('metrics sent');
    })
    .catch(() => {
      console.log('metrics failed');
      clearInterval(intervalId);
    });
}

export function setupMetrics() {
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
