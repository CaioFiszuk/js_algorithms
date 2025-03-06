/**
 * 
 * @param {number} number 
 * @returns {boolean}
 */

function isDisarium(number) {
    const numbers = Array.from(number.toString());
    let result = 0;

    for(let i = 0; i < numbers.length; i++){
       result += Math.pow(numbers[i], i+1);
    }

    return number === result ? true : false;
}


console.log(isDisarium(135));//true
console.log(isDisarium(582));//false