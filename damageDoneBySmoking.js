/**
 * 
 * @param {int} cigarrettesByDay 
 * @param {int} howManyYears  
 * @returns {string}
 */

function damageDoneBySmoking(cigarrettesByDay, howManyYears){
   let years = howManyYears * 365;

   let cigarrettes = cigarrettesByDay * years;

   let lostMinutes = cigarrettes * 10;

   return `You have been lost ${Math.round(lostMinutes / 1440)} days of your life by smoking`;
}

console.log(damageDoneBySmoking(5, 10)); //You have been lost 127 days of your life by smoking