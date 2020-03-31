import { useState, useEffect } from 'react';
import { screens } from 'tailwindcss/defaultTheme';

function matchMedia(breakpoint) {
  return window.matchMedia(`(min-width: ${breakpoint})`).matches;
}

export function getDeviceWidth() {
  if (!process.browser) {
    return 'server';
  }

  let width = 'xs';

  Object.entries(screens).forEach(([key, value]) => {
    if (matchMedia(value)) {
      width = key;
    }
  });

  return width;
}

export function useDeviceWidth() {
  const [stateDeviceWidth, setStateDeviceWidth] = useState('server');

  useEffect(() => {
    const deviceWidth = getDeviceWidth();
    setStateDeviceWidth(deviceWidth);
  }, []);

  return stateDeviceWidth;
}
