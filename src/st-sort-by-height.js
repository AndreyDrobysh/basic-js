import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(_arr) {
  const arr = [..._arr];
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
    return 0;
  }
  const newArr = arr.filter((item) => item !== -1)
    .sort(compareNumeric);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      [arr[i]] = newArr;
      newArr.shift();
    }
  }
  return arr;
}
