/**
 * 
 * @param {string} name 
 * @returns {string}
 */

function heavyMetalCase(name) {
   name = Array.from(name);

   return name.map((v)=>{
      switch(v){
         case "a":
            return "ä";
            break;
         case "A":
            return "Ä";
            break;  
         case "e":
            return "ë";
            break;
         case "E":
            return "Ë";
            break;
         case "o":
            return "ö";
            break;
         case "O":
            return "Ö";
            break;  
         case "u":
            return "ü";
            break;
         case "U":
            return "Ü";
            break; 
         default:
            return v;                   
      }
   }).join("");

}

console.log(heavyMetalCase("Blue oyster cult")); //Blüë öystër cült
console.log(heavyMetalCase("Bunter Vogel")); //Büntër Vögël
console.log(heavyMetalCase("Wolkenschieber")); //Wölkënschiëbër