(function() {
  'use strict';

  function doSomeStuff(){
    //This will eventually do some things
    return function innerFunc(fnArg){
      //TODO: Make this code do some work
    }
  }

  var stuffFunctionRef = doSomeStuff();

}());
