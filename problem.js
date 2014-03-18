var applyf = function(binary) {
  return function(a) {
    return function(b) {
        return binary(a, b);
    }
  }
}

var curry = function(binary, first) {
  return applyf(binary)(first);
}

var addf = function(x) {
  return function(y) {
    return x+y;
  }
}

var add = function(a, b) {
  return Number(a) + Number(b);
}

var mul = function(a, b) {
  return Number(a) * Number(b);
}

var methodize = function(binary) {
  return function(y) {
    return binary(this, y);
  }
}

var demethodize = function(method) {
  return function(that, y){
    return method.call(that, y);
  }
}

Number.prototype.add = methodize(add);
var addfunc = demethodize(Number.prototype.add);

alert(addfunc(3,4));
