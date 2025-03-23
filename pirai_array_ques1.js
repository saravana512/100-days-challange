const arr = [1, 2, 3, 4, 4, 6, 7, 8, 9, 10];

const uniqueElements = new Map();
const arrHashmap = new Map();

for (let j = 0; j < arr.length; j++) {
  const element = arr[j];
  arrHashmap.set(element, element);
}

for (let i = 0; i < arr.length; i++) {
  if (!uniqueElements.has(arr[i])) {
    uniqueElements.set(arr[i], true);
  } else {
    if (arrHashmap.has([arr[i] + 1])) {
      arr.splice(i, 1);
    } else {
      arr.splice(i, 1, arr[i] + 1);
    }
  }
}

console.log(arr);
