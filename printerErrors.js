/**
 * 
 * @param {string} string 
 * @returns {string}
 */

function printerErrors(string){
    let error = 0;

    let array = string.split("").map((v)=>{
       if(v != 'a' && v != 'b' && v != 'c' && v != 'd' && v != 'e' && v != 'f' && v != 'g' && v != 'h' && v != 'i' && v != 'j' && v != 'k' && v != 'l' && v != 'm'){
        return 'x';
       }

    });

    for(let i = 0; i < array.length; i++){
        if(array[i] != undefined){
           error++;
        }
    }

    return `${error} / ${string.length}`;
}

console.log(printerErrors("llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch")); //26 / 58


// Concept: My keyboard has no keys [n-z]. So there will be an error when this letters are in the string.
//  (number of errors / string length)