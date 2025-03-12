Array.prototype.myMap = function (callback) {
  console.log(this);
  const result = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    result.push(callback(element));
  }
  console.log(result);
  return result;
};

const data = [1, 2, 3, 4, 5];
data.myMap((e) => e * 2);
