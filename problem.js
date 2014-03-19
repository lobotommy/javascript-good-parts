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

function twice(binary) {
  return function(x) {
    return binary(x,x);
  }
}

function composeu(u1, u2) {
  return function(x) {
    return u2(u1(x));
  }
}

var double = twice(add);
var square = twice(mul);


function composeb(b1, b2) {
  return function(x, y, z) {
    return b2(b1(x,y), z);
  }
}

function once(func) {
  return function() {
    var f = func;
    func = null;
    return f.apply(this, arguments);
  };
}

function revocable(func) {
  return {
    invoke : function() { return func.apply(this, arguments); },
    revoke : function() { func = null; }
  };
}

function revocableNoChrome(func) {
  return {
    invoke: function() {
      return func.apply(
        this,
        arguments
      );
    },
    revoke: function() {
      func = null;
    }
  };
}


function counterf(counter) {

  return {
    inc : function() {
      return counter = counter + 1;
    },
    dec : function() {
      return counter = counter - 1;
    }
  };
}

var temp = revocable(alert);
temp.invoke(7);
temp.revoke();
temp.invoke(8);
