import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(name) {
  if (!Array.isArray(name)) return false
  let ans = name
    .filter(function (item, i) {
      return typeof item === "string"
    })
    .map(function (item, i) {
      return item.trim()[0].toUpperCase();
    })
    .sort()
    .join('')
    return ans || false;
}
