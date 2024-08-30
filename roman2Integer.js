/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const SYMBOLS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let previousValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = SYMBOLS[s[i]];

    if (currentValue < previousValue) {
      sum -= currentValue;
    } else {
      sum += currentValue;
    }

    previousValue = currentValue;
  }

  return sum;
};
