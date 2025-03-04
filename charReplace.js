/**
 * 
 * @param {string} word  
 * @returns {string}
 */

function charReplace(word){
    const map = {
        "ą": "a", "ć": "c", "ę": "e", "ł": "l", "ń": "n",
        "ó": "o", "ś": "s", "ź": "z", "ż": "z"
     };
  
    return word.replace(/[ąćęłńóśźż]/g, match => map[match]);
}


console.log(charReplace("Jędrzej Błądziński")); //Jedrzej Bladzinski