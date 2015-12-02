(function() {
  'use strict';

  function doSomeStuff(){
    //This will eventually do some things
    return function innerFunc(fnArg){
      if(fnArg){
        window.alert('That doesn\'t go there!')
      }
    }
  }

  window.stuffFunctionRef = doSomeStuff();

}());
