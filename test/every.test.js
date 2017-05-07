const _ = require('../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [1, 3, 5, 6, 7];
      expect(_.every(nums, num => num % 2 === 1)).toBe(false);
    });

    it('returns true if all numbers contained in an object are even and we test for even numbers', () => {
      const obj = {
        Barcelona: 2,
        Madrid: 8,
        PSG: 6,
        Junior: 20
      };
      expect(_.every(obj, num => num % 2 === 0)).toBe(true);
    });

    it('returns false if all numbers contained in an object are odd and we test for even numbers', () => {
      const obj = {
        Barcelona: 2,
        Madrid: 8,
        PSG: 6,
        Junior: 21
      };
      expect(_.every(obj, num => num % 2 === 0)).toBe(false);
    })

  });
});