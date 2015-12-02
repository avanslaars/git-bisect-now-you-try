(function() {
  'use strict';

  function getMeAValue(valueFlag){
    if(!!valueFlag === true){
      return 'the value'
    }
  }

  function doSomeStuff(){
    //This will eventually do some things
    return function innerFunc(fnArg){
      if(!fnArg){
        window.alert('That doesn\'t go there!')
      }
    }
  }

  window.stuffFunctionRef = doSomeStuff();

}());
