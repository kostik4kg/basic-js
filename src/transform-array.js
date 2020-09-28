const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray([])){
    throw new Error();}    
    let a = arr.slice(0);
    for(let i=0; i< a.length; i++){
      if (a[i] === '--discard-next') {
        a[i] = undefined;
        a[i+1] = undefined;
       }
      else if (a[i] === '--discard-prev') { 
        a[i] = undefined;
        a[i - 1] = undefined;
      }
      else if (a[i] === '--double-next') {
        if(a[i+1] !== undefined){
        a[i] = a[i+1];
        }else{
          a[i] = undefined;
        }
       }
      else if (a[i] === '--double-prev') {
        if(a[i-1] !== undefined){
          a[i] = a[i - 1];
        }else{
          a[i] = undefined;
        }
       }   } 
  return a.filter(function (e) {
    return e !== undefined ;
  });

};