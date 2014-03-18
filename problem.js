var identity = function(id) {
  return function() {
    return id;
  }
}

var addf = function(a) {
  return function(b) {
    return a + b;
  }
}

var add = function(a, b) {
  return Number(a) + Number(b);
}

var mul = function(a, b) {
  return Number(a) * Number(b);
}

alert(addf(3)(4));
