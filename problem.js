var identity = function(id) {
  return function() {
    return id;
  }
}

var add = function(a, b) {
  return Number(a) + Number(b);
}

var mul = function(a, b) {
  return Number(a) * Number(b);
}

var idf = identity(3);

alert(idf());
