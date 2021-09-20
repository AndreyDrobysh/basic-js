import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

 const k = 0.693 / HALF_LIFE_PERIOD;

export default function dateSample(active) {
  // throw new NotImplementedError('Not implemented');
  
  if (typeof active !== 'string' || !+active || +active <= 0) {
    return false
  }
  const ans = Math.ceil(Math.log(MODERN_ACTIVITY / +active) / k)
  if (ans < 0) {
    return false;
  }
  return ans;
}
