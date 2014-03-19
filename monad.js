function MONAD(modifier) {
  var prototype = Object.create(null);
  function unit(value) {
    var monad = Object.create(prototype);

  monad.bind = function(func, args) {
      return func.apply(undefined,
        [value].concat(Array.prototype.slice.apply(args || []))
      );
    };

    if(typeof(modifier) === 'function'){
      modifier(monad, value);
    }

    return monad;
  }

  unit.lift = function (name, func) {
    prototype[name] = function() {
      var result = this.bind(func, arguments);
      return result;
    };
    return unit;
  };

  return unit;
}


var maybe = MONAD(function (monad, value) {
  if(value === null || value === undefined) {
    monad.is_null = true;
    monad.bind = function() {
      return monad;
    };
  }
});


var monad = maybe(null);
monad.bind(alert);
