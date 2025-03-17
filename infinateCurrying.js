// add(1)(2)(3)(4)...(n)

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(1)(2)(3)(4)());

function sum(a) {
  return function (b) {
    if (!b) return a;
    return sum(a + b);
  };
}
console.log(sum(1)(2)(3)(4)(5)(6)()); //21
