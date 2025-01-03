/**
 * 
 * @param {int} number1 
 * @param {int} number2 
 * @param {int} limit 
 * @returns {number}
 */

function incrementer(number1, number2, limit) {
  let arr = [];

  for(let i = limit; i >= 1; i--){
    arr.push(number1 * number2);
    number1++;
    number2++;
  }

  return arr.reduce((prev, curr)=>prev + curr, 0);
}


console.log(incrementer(6,5,3)); //128
console.log(incrementer(7,8,5)); //460