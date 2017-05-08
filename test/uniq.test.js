const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups an iterable object of strings and numbers', () => {
    const obj = {
      0: 'bruh',
      1: 3,
      2: 2,
      3: 'good',
      4: 'bruh',
      5: 'nah',
      6: 9,
      8: 3
    };

    expect(_.uniq(obj)).toEqual(['bruh', 3, 2, 'good', 'nah', 9]);
  });
});