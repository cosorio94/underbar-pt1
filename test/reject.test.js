const _ = require('../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 4, 6, 8, 10]);
  });

  it('rejects null values from an object', () => {
    const order = {
      entree: 'burger',
      side: null,
      condiment: 'ketchup',
      drink: null,
      dessert: 'cookie'
    };

    const orderItems = _.reject(order, (value) => value === null);
    expect(orderItems).toEqual(['burger', 'ketchup', 'cookie']);
  });

  it('rejects odd numbers from an object', () => {
    const nums = {
      0: 2,
      1: 32,
      3: 3,
      4: 9,
      5: 10
    };

    const oddNums = _.reject(nums, value => value % 2 === 1);
    expect(oddNums).toEqual([2, 32, 10]);
  });
});