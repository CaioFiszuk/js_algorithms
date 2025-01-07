/**
 * 
 * @param {string} string 
 * @returns {array}
 */

function rotateString(string){
   let array = [];

   array.push(string.toLowerCase());

   for(let i = 1; i < string.length; i++){
     array.push(string.substr(i) + string.substr(0, i));
   }

   return array;
}

console.log(rotateString("susquehanna"));
/*[
    'susquehanna', 'usquehannas',
    'squehannasu', 'quehannasus',
    'uehannasusq', 'ehannasusqu',
    'hannasusque', 'annasusqueh',
    'nnasusqueha', 'nasusquehan',
    'asusquehann'
  ]*/

