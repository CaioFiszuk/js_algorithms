/**
 * 
 * @param {int} divisor 
 * @param {array} numbers 
 * @returns {boolean}
 */

function isDivisible(divisor, dividend) {
  if(divisor % dividend === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(45, 5)); //true
console.log(isDivisible(13, 5)); //false