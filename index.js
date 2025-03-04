/**
 * 
 * @param {number} number
 * @returns {number}
 */

function positivesOdds(number){
    const result = [];

    for(let i = 0; i < number; i++){
        if(i % 2 !== 0){
            result.push(i);
        }
    }

    return result.length;
}

console.log(positivesOdds(15023)); //7511
console.log(positivesOdds(15)); //7