/**
 * 
 * @param {string} string
 * @param {string} char 
 * @returns {string}
 */

function removeChar(string, char) {
  let array = Array.from(string);
  let result = [];

  for(let i = 0; i < array.length; i++) {
    if(array[i] !== char){
       result.push(array[i]);
    }
  }

  return result.join("");
}

console.log(removeChar("hello world", "l")); //heo word
console.log(removeChar("lorem ipsum", " ")); //loremipsum