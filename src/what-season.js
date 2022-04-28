const { NotImplementedError } = require('../extensions/index.js');

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
 function getSeason(date = null) {
  const errStr = 'Unable to determine the time of year!';
  if (date === null) return errStr;
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  try {
    date.getTimezoneOffset();
  } catch (error) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  switch (true) {
    case month > 1 && month < 5:
      return 'spring';
    case month > 4 && month < 8:
      return 'summer';
    case month > 7 && month < 11:
      return 'autumn';
    case month > 10 || month < 2:
      return 'winter';
  }
}
module.exports = {
  getSeason
};
