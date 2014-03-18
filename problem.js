var applyf = function(binary) {
  return function(a) {
    return function(b) {
        return binary(a, b);
    }
  }
}

var curry = function(binary, a) {
  return function(b) {
    return binary(a, b);
  }
}

var add = function(a, b) {
  return Number(a) + Number(b);
}

var mul = function(a, b) {
  return Number(a) * Number(b);
}

//var add3 = curry(add, 3);
//alert(add3(4));
alert(curry(mul, 5)(6));
