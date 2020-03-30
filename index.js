// Code your solution in this file
function findMatching(driverArray, string){
//  Using for...of to iterate through and filter with an if statement

//   const result = [];
//   for (const name of driverArray) {
//     if (name.toLowerCase() === string.toLowerCase()){
//       result.push(name);
//     }
//   }
//   return result;
// }
// Using filter
  return driverArray.filter(function(name){ return name.toLowerCase() === string.toLowerCase(); });
}

function fuzzyMatch(driverArray, string){
  return driverArray.filter(function(name){ return name.startsWith(string);});
}

function matchName(driverArray, string){
  return driverArray.filter(function(driver){return driver['name'] === string});
}