/**
 * 
 * @param {string} str 
 * @returns {string}
 */

function capitalize(str){

   return result = str.split(" ").map((v)=>{
      return v.charAt(0).toUpperCase()+v.substring(1,v.length);
   }).join(" ");

}

console.log(capitalize("lorem ipsum amet")); //Lorem Ipsum Amet