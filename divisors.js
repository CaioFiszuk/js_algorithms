/**
 * 
 * @param {int} number 
 * @returns {array}
 */

function divisors(number) {
  let divisors = [];

  for(let i = 1; i <= number; i++) {
    if(number % i == 0){
        divisors.push(i);
    }
  }

  return divisors;
}

console.log(divisors(30));
/*[
  1,  2,  3,  5,
  6, 10, 15, 30
]*/