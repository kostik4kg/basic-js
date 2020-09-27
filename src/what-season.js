const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(a) {
  
  if (a === undefined) {
    return 'Unable to determine the time of year!';
  } 
  if (isNaN(a.valueOf()) && a instanceof Date) throw new Error('THROWN');
  
  else if(typeof(a.getMonth()) === 'number'){
    const m = a.getMonth();
    if (m === 11 || m === 1 || m === 0) {
      return 'winter';
    } else if (m >= 2 && m <= 4) {
      return 'spring';
    } else if (m >=5 && m <= 7) {

      return 'summer';
    } else if (m >= 8 && m <= 10) {
      return 'autumn';
    }
  } 
};
