function sum () {
  let result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}


function sum (...args) {
  let result = 0;
  for (var i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}


Function.prototype.myBind = function (context) {
  let args = Array.prototype.slice.call(arguments, 1);
  return (...callArgs) => {
    return this.apply(context, args.concat(callArgs));
  };
};

Function.prototype.myBind = function (context, ...args) {
  return (...callArgs) => {
    return this.apply(context, args.concat(callArgs));
  };
};


 function curriedSum (numArgs) {
  let numbers = [];

  function _curriedSum (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let total = 0;
      for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
      }
      return total;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
  let args = [];
  let that = this;
  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return that.apply(null, args);
    } else {
      return _curry;
    }
  }
  return _curry;
};
