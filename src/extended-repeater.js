const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { additionSeparator = '|', separator = '+', addition = ''}) {
  if ((arguments[1].repeatTimes === undefined) && (arguments[1].additionRepeatTimes === undefined)){
    arguments[1].repeatTimes = 1;
    arguments[1].additionRepeatTimes = 1;
  }
  
    let arr = [];
    let arr2 = [];
    let i  = 0;
  
  while (i < arguments[1].additionRepeatTimes){
    arr.push(arguments[1].addition)
    i++;
  }

  let str2 = str + arr.map(item=>item+'').join(additionSeparator);
  let j = 0;
  while (j < arguments[1].repeatTimes) {
    arr2.push(str2)
    j++;
  }
  let strFinish = arr2.join(separator);
  return strFinish;
};
  