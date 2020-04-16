import { quantize } from '../src/math';

describe('test quantize method', () => {
  test.each(
    [
      [1, 0, 1],
      [1.666, 1, 1.7],
      [1.666, 2, 1.67],
      [1.005, 2, 1.01],
      [0.005, 2, 0.01],
      [1.0005, 3, 1.001],
      [1234.5, 0, 1235],
      [1234.5, 1, 1234.5],
    ]
  )('.quantize(%i, %i) === %i', (a, b, expected): void => {
    expect(quantize(a, b)).toBe(expected);
  });
});
