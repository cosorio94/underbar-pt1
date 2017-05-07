const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of arrays of just goals, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12, goals: [2, 3, 1]},
      { name: 'Lazarus', age: 999, goals: 0},
      { name: 'Bethany', age: 14, goals: [3, 8, 1]}
    ];
    const result = _.pluck(people, 'goals');
    expect(result).toEqual([[2, 3, 1], 0, [3, 8, 1]]);
  });

});