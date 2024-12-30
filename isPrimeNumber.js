/**
 * 
 * @param {number} number
 * @returns {boolean}
 */

function isPrimeNumber(number){
    let divisors = [];

    for(let i = 1; i <= number; i++){
        if(number % i === 0){
            divisors.push(i);
        }
    }

    return divisors.length == 2 ? true : false;
}

console.log(isPrimeNumber(29)) // true
console.log(isPrimeNumber(37)) // true
console.log(isPrimeNumber(44)) // false