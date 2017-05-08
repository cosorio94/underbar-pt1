const _ = require('../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [2, 4, 5, 6];
    expect(_.some(nums, num => num % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [2, 4, 6, 8];
    expect(_.some(nums, num => num % 2 === 1)).toBe(false);
  });

  it('returns true if any of the object properties is an odd number', () => {
    const obj = {
      0: 2,
      4: 4,
      2: 8,
      8: 3,
      lol: 'bruh'
    };

    expect(_.some(obj, num => num % 2 === 1)).toBe(true);
  })

});