// Code your solution in this file
function findMatching(drivers, name){
   return drivers.filter(function (driver) {
     return driver.toLowerCase() === name.toLowerCase()
   });
}

function fuzzyMatch(drivers, letters) {
  let reg = new RegExp(`${letters}|\\w+`, `ig`);
  return drivers.filter(function (driver) {
    return driver !== driver.match(reg).toString()});
}


function matchName (list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}