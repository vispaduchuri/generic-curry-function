// A generic implementation of Currying function
function curry(...args) {
  return function(...args2) {
    if (args2.length === 0) {
      return args.reduce((a, b) => a * b);
    }
    return curry.apply(this, args.concat(args2));
  };
}

console.log(curry(1)(2)(3)(10)(20)());

// Function returns Mul after 3 values are given.
function curry3(args) {
  return function(args1) {
    return function(args2) {
      return args * args1 * args2;
    };
  };
}

console.log(curry3(1)(1)(2));
