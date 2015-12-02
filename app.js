(function() {
  'use strict';

  window.stuffFunctionRef = doSomeStuff();
  window.flagGetter = getFlag()();
  
  function doSomeStuff(){
    return function innerFunc(fnArg){
      if(!!fnArg){
        window.alert('That doesn\'t go there!')
      }
    }
  }

  function getFlag(){
    return function(){
      return function(){
        return true;
      }
    }
  }

}());
