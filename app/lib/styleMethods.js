import { round } from './numbers';

export const remCalc = (pixelValue, baseValue = 16) => `${round(pixelValue / baseValue, 2)}rem`;

export const transformThreeD = (e, x, xUnit, y, yUnit, z, zUnit) => {
  e.style.webkitTransform = `translate3d(${x}${xUnit}, ${y}${yUnit}, ${z}${zUnit})`;
  e.style.MozTransform = `translate3d(${x}${xUnit}, ${y}${yUnit}, ${z}${zUnit})`;
  e.style.OTransform = `translate3d(${x}${xUnit}, ${y}${yUnit}, ${z}${zUnit})`;
  e.style.transform = `translate3d(${x}${xUnit}, ${y}${yUnit}, ${z}${zUnit})`;
};

export const transformRotate = (e, value) => {
  e.style.webkitTransform = `rotate(${value}deg) translateZ(0)`;
  e.style.Moztransform = `rotate(${value}deg) translateZ(0)`;
  e.style.OTransform = `rotate(${value}deg) translateZ(0)`;
  e.style.transform = `rotate(${value}deg) translateZ(0)`;
};

export const transformOpacity = (e, value) => { e.style.opacity = value; };
