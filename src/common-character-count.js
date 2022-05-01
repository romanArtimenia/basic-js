const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function count(str) {
  return str.split('').reduce((acc, item) => {
    if (!(item in acc)) acc[item] = 0;
    acc[item] += 1;
    return acc;
  }, {});
} 
 function getCommonCharacterCount(s1, s2) {
   const resS1 = count(s1);
  const resS2 = count(s2);
  let res = 0;
  for (const key in resS1) {
    if (resS2[key] !== undefined) {
      res += Math.min(resS1[key], resS2[key]);
    }
  }
  return res;
}


module.exports = {
  getCommonCharacterCount
};
