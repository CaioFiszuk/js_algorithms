/**
 * 
 * @param {number1} number
 * @param {number2} number
 * @returns {number}
 */

function hammingDistance(number1, number2) {
   if(number1.length != number2.length){
      return "The string must have the same length";
   }

   let array1 = String(number1).split("");
   let array2 = String(number2).split("");
   let result = 0;

   for(let i = 0; i < array1.length; i++){
      if(array1[i] != array2[i]){
         result++;
      }
   }

   return result;
}


console.log(hammingDistance(100101, 101001)); //2
console.log(hammingDistance(1011101, 1001001)); //2