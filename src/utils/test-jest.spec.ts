import {expect, test, describe} from '@jest/globals';

import {sum} from './test-jest';

describe('sum', () => {
  test('should return 0 for an empty array', () => {
    expect(sum([])).toBe(0);
  });

  test('should return the sum of all numbers in the array', () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([-1, 0, 1])).toBe(0);
    expect(sum([10, 20, 30, 40])).toBe(100);
  });
});