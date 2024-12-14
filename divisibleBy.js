/**
 * 
 * @param {int} divisor 
 * @param {array} numbers 
 * @returns {array}
 */

function divisibleBy(divisor, numbers) {
   let result = [];

   for(let i = 0; i < numbers.length; i++){
      if(numbers[i] % divisor == 0) {
        result.push(numbers[i]);
      }
   }

   return result;
}

console.log(divisibleBy(2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[ 2, 4, 6, 8, 10 ]

console.log(divisibleBy(3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[ 3, 6, 9 ]