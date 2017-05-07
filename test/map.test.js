_ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every number in an object of numbers to their square', () => {
    const obj = {
      width: 3,
      height: 6,
      invincibility: 10
    };
    const mappedArr = _.map(obj, (el) => el * el);
    expect(mappedArr).toEqual([9, 36, 100]);
  })
});