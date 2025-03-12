Array.prototype.last = function () {
  if (Array.isArray(this)) {
    if (this.length === 0) {
      return -1;
    }
    return this[this.length - 1];
  } else throw new Error("Not an array");
};

const names = ["John", "Jane", "Doe"];
console.log(names.last()); // Doe
console.log([].last()); // -1
console.log([1, 2, 3].last()); // 3
console.log("Hello".last()); // Error: Not an array˝
console.log({}.last()); // Error: Not an array
