/**
 * 
 * @param {number} number 
 * @returns {boolean}
 */

function isDisarium(number) {
    let numberToString = String(number);
    let arrayToString = numberToString.split("");

    for(let i = 0; i < arrayToString.length; i++) {
        arrayToString[i] = Number(arrayToString[i]);
    }

    let result = arrayToString.map((v, k)=>{
        return Math.pow(v, k+1);
    });

    let compare = result.reduce((prev, current) => prev + current, 0);

    if(compare == number){
        return true;
    }else{
        return false;
    }
}


console.log(isDisarium(135));//true
console.log(isDisarium(582));//false