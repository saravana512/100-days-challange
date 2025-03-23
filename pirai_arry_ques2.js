const arr = [1, 2, 3, 4, 5, 6, 7, 22, 34, 34, 34, 58, 23, 58];

const countForEachValue = new Map();
let max = 0;

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if (max < element) {
    max = element;
  }

  if (!countForEachValue.has(element)) {
    countForEachValue.set(element, 1);
  } else {
    countForEachValue.set(
      element,
      parseInt(countForEachValue.get(element)) + 1
    );
  }
}

console.log(max, countForEachValue.get(max));
