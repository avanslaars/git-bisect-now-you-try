(function() {
  'use strict';

  function getMeAValue(valueFlag){
    if(!!valueFlag === true){
      return 'the value'
    }
  }

  function getFlag(){
    return function(){
      return function(){
        return true;
      }
    }
  }

  function doSomeStuff(){
    return function innerFunc(fnArg){
      if(!!fnArg){
        window.alert('That doesn\'t go there!')
      }
    }
  }

  window.stuffFunctionRef = doSomeStuff();
  window.flagGetter = getFlag()();

}());
