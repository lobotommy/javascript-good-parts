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

Number.prototype.add = methodize(add);
alert((3).add(4));
