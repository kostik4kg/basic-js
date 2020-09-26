const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if(value === undefined){
      this.arr.push('( ' + "( )" + ' )');
    } else this.arr.push(`( ${value} )`);
    
    return this;
  },
  removeLink(position) {
    if(position%1 !== 0){
      this.arr =[];
      throw new Error();
    } else{
      this.arr.splice((position - 1), 1);
    }
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let s = this.arr.join('~~');
    this.arr = [];
    return s;
  }
};

module.exports = chainMaker;
