import {
  even,
  percentage,
  clamp,
  interpolate,
  round,
  position,
} from '../numbers';

describe('numbers helpers', () => {
  it('can give even/odd boolean', () => {
    const shouldBeEven = even(2);
    const shouldBeOdd = even(3);
    expect(shouldBeEven).toBeTruthy;
    expect(shouldBeOdd).toBeFalsey;
  });

  it('can get a percentage', () => {
    const fiftyPercent = percentage(500, 1000);
    const thirtyPercent = percentage(3, 10);
    expect(fiftyPercent).toBe('50%');
    expect(thirtyPercent).toBe('30%');
  });

  it('can clamp a range', () => {
    const clampedValue1 = clamp(10, 0, 5);
    const clampedValue2 = clamp(3, 0, 5);
    const clampedValue3 = clamp(-1, 0, 5);
    expect(clampedValue1).toBe(5);
    expect(clampedValue2).toBe(3);
    expect(clampedValue3).toBe(0);
  });

  it('can interpolate values', () => {
    const interpolatedValues1 = interpolate(0, 100, 25);
    const interpolatedValues2 = interpolate(6, 450, 25);
    expect(interpolatedValues1).toBe(2500);
    expect(interpolatedValues2).toBe(11106);
  });

  it('can round a float value', () => {
    const floatValue1 = round(0.3224);
    const floatValue2 = round(0.6794, 2);
    expect(floatValue1).toBe(0);
    expect(floatValue2).toBe(0.68);
  });

  it('can determine position', () => {
    const positionValue1 = position(25, 3);
    expect(positionValue1).toBe(25);
  });
});
