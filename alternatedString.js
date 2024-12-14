/**
 * 
 * @param {string} string 
 * @returns {string}
 */

function alternatedString(string){
   let array = Array.from(string);

   let modifiedArray = array.map((v, k)=>{
      if(k % 2 == 0) {
         return v.toUpperCase();
      }else{
         return v.toLowerCase();
      }
   })

   return modifiedArray.join("");
}

console.log(alternatedString("new york city lights"));
//NeW YoRk cItY LiGhTs