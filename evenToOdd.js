/**
 * 
 * @param {array} numbers
 * @returns {array}
 */

function evenToOdd(numbers){
  let evens = [];
  let odds = [];

  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    }else{
        odds.push(numbers[i]);
    }
  }

  return evens.concat(odds);
}

console.log(evenToOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
//[2, 4, 6, 8, 10, 12, 1, 3, 5, 7, 9, 11]
  