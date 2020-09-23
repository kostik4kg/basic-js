const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (Array.isArray(arr)){
    let comandName = '';
    arr.map(function (v) {
      if (typeof(v) === 'string') {
        let strOne = v.trim()
          comandName += strOne[0].toUpperCase();
        
      } else return false
    })
    return comandName.split('').sort().join('');
  }else return false;
};
