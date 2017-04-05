function forEach(callback, theArray) {
 
  for (var i = 0; i < theArray.length; i++) {
    
    callback(theArray[i]);
  }
}

function map(mappingFunction, theArray) {
  
  var tempArray = [];
  
  forEach(function(item){
    
    tempArray.push(mappingFunction(item))
    
  }, theArray)
    
  return tempArray;
}

function filter(predicate, theArray) {
  
  var tempArray = [];
  
  forEach(function(item){
    
    if(predicate(item)){
      
      tempArray.push(item)
    }
    
  }, theArray)
  
  return tempArray;

}

function every(predicate, theArray) {
  
  for(var i = 0; i < theArray.length; i++){
    if(!predicate(theArray[i])){
      return false;
      break;
    }
  }
  return true;
}

function some(predicate, theArray) {
  
  for(var i = 0; i < theArray.length; i++){
    if(predicate(theArray[i])){
      return true;
      break;
    }
  }
  return false;

}

function indexOf(item, theArray) {
  
  for (var i = 0; i < theArray.length; i++){
    
    if(item === theArray[i]) {
      
      return i;
    }
  }
  return -1
}


function findIndex(predicate, theArray) {
  
  for (var i = 0; i < theArray.length; i++){
    
    if(predicate(theArray[i])) {
      
      return i;
    }
  }
  return -1
  

}

function first(n, theArray) {

  var tempArray = [];
  
  if (Array.isArray(n)){
    return n[0]
  }
  
  if (n < theArray.length){
    for (var i = 0; i < n; i++){
      tempArray.push(theArray[i])
    }
    return tempArray;
  }
  
  else if (n > theArray.length){
    
    return theArray;
  }

}

function last(n, theArray) {

}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}

function negate1(predicate) {

}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
