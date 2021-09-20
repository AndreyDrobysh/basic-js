import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr ) {
  let newArr = [...arr]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && i < newArr.length - 1) {
      newArr[i] = null;
      newArr[i + 1] = null;
    }
    if (arr[i] === '--discard-next' && i === newArr.length - 1) {
      newArr[i] = null;
    }
    if (arr[i] === '--discard-prev' && i > 0) {
      newArr[i] = null;
      newArr[i - 1] = null;
    }
    if (arr[i] === '--discard-prev' && i === 0) {
      newArr[i] = null;
    }
    if (arr[i] === '--double-next' && i < arr.length - 1) {
      newArr[i] = newArr[i + 1];

    }
    if (arr[i] === '--double-next' && i === arr.length - 1) {
      newArr[i] = null
    }
    if (arr[i] === '--double-prev' && i > 0) {
      newArr[i] = newArr[i - 1]
    }
    if (arr[i] === '--double-prev' && i === 0) {
      newArr[i] = null;
    }
  }

  return newArr.filter(function (item) {
    return item !== null
  })
}
