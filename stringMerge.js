/**
 * 
 * @param {firstWord} string
 * @param {secondWord} string
 * @param {letter} string
 * @returns {string}
 */

function stringMerge(firstWord, secondWord, letter) {
    let firstCut = firstWord.indexOf(letter);
    let secondCut = secondWord.indexOf(letter);

    firstWord = firstWord.substr(0, firstCut);
    secondWord = secondWord.substr(secondCut);

    return `${firstWord}${secondWord}`;
 }
 
 console.log(stringMerge("avocado", "abacaxi", "c"));
 //avocaxi