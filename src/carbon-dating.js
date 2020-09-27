const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(a) {
  if(typeof(+a) === 'number' && typeof(a) === 'string' && a !== undefined){
    if(+a >0 && +a < 15){
    return Math.ceil(Math.log((MODERN_ACTIVITY / (+a))) / (0.693 / HALF_LIFE_PERIOD));
    } else return false;
  }else return false;
};
