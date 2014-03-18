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

var inc1 = curry(add, 1);
//alert(inc1(5));

var inc2 = applyf(add)(1);
//alert(inc2(5));

var inc3 = addf(1);
var result = inc3(5);
alert(result);
