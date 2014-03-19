function MONAD() {
  var prototype = Object.create(null);
  function unit(value) {
    var monad = Object.create(prototype);

  monad.bind = function(func, args) {
      return func.apply(undefined,
        [value].concat(Array.prototype.slice.apply(args || []))
      );
    };

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

var unit = MONAD().lift('alert', alert);
var monad = unit("Hello World");
monad.alert();
