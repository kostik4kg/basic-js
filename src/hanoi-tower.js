const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(a, b) {
  let steps = Math.pow(2,a) - 1;
  let sec = b / 3600;
  let result = {
    turns : steps,
    seconds: Math.floor( steps/sec)
  }
  return result
};
