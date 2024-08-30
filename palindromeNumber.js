/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let backwards = x.toString().split("").reverse().join("");
  if (x == backwards) return true;

  return false;
};
