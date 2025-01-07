/**
 * 
 * @param {int} length 
 * @returns {string}
 */

function generateBinaryNumber(length) {
   let bin = '01';
   let random = '';

   for(let i = 0; i < length; i++){
      random += bin[Math.floor(Math.random()*2)];
   }

   return typeof random;
}

console.log(generateBinaryNumber(20)); //11110010011000000101
console.log(generateBinaryNumber(5)); //01011