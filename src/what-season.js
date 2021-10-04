import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
 
  if (!date)  return 'Unable to determine the time of year!';

  let month = date.getUTCMonth();
  return (month >=2 && month <=4) ? 'spring' :
        (month >=5 && month <=7) ? 'summer' :
        (month >=8 && month <=10) ? 'autumn' :
        (month ==11 || month >=0 && month < 2) ? 'winter' : 'Unable to determine the time of year!';

}
