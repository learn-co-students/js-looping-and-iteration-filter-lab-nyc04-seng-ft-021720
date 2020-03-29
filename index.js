function findMatching(array, name){
    return array.filter(function (person) {return person.toLowerCase() === name.toLowerCase()})    
}

function fuzzyMatch(array, letters) {
    return array.filter(function (driver) {return driver.slice(0,letters.length) === letters})
}

function matchName(object, name){
    return object.filter(function (driver) {return driver.name === name})
}