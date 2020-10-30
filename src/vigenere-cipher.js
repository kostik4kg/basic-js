const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(aaa=true){
    this.aaa = aaa;
  }
  encrypt(str, key) {
    if(str === undefined || key === undefined){
      throw new Error();
    }else{
    let alf = 'abcdefghijklmnopqrstuvwxyz';
    let cipher = '';
    let str2 = str.toLowerCase();
    let key2 = key.toLowerCase();
    let indKey = 0;
    while (str.length > key2.length) {
      key2 += key2;
    }
    for(let i = 0; i< str.length; i++){
      if(str2[i].charCodeAt() < 97 || str2[i].charCodeAt() > 122){
        cipher += str2[i];
        indKey--;
      }else{
        cipher += alf[((key2[indKey + i].charCodeAt()-97) + (str2[i].charCodeAt()-97)) % 26];
    }
    }
    if (!this.aaa) {
      return cipher.toUpperCase().split('').reverse().join('')
    }else{
    return cipher.toUpperCase();
  }}
  }    
  decrypt(str, key) {

    if (str === undefined || key === undefined) {
      throw new Error();
    }
    else{
    let alf = 'abcdefghijklmnopqrstuvwxyz';
    let cipher = '';
    let str2 = str.toLowerCase();
    let key2 = key.toLowerCase();
    let indKey = 0;
    while (str.length > key2.length) {
      key2 += key2;
    }
    for (let i = 0; i < str2.length; i++) {

      if (str2[i].charCodeAt() < 97 || str2[i].charCodeAt() > 122) {
        cipher += str2[i];
        indKey--;
      } else {
        cipher += alf[((str2[i].charCodeAt() - 97) + 26 - (key2[indKey + i].charCodeAt() - 97)) % 26];
      }
    }
    if(!this.aaa){
      return cipher.toUpperCase().split('').reverse().join('')
    }else{
    return cipher.toUpperCase();
    }
  }
}
}

module.exports = VigenereCipheringMachine;
