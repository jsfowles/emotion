import { limit } from './numbers';

export const isInViewport = (e, offset) => {
  const distance = e.getBoundingClientRect();

  return (distance.top >= 0 && distance.top <= window.innerHeight - offset) ||
    (document.documentElement.clientHeight - offset);
};

export const position = (base, range, relativeY, offset) => (
  base + (limit(0, 1, relativeY - offset) * range)
);
