import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = String(n).split('')
  let ans;

  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] <= +arr[i + 1]) {
      arr.splice(i, 1)
      ans = arr.join(''); 
      return +ans
    }
  }
  arr.splice(arr.length - 1, 1)
  ans = arr.join(''); 
  return +ans
}

