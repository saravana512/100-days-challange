const source = [1, 2, 3];
const target = [3, 4, 5, 6];

function isIntersect() {
  return source.some((item) => target.includes(item));
}

function isIntersect() {
  const arr = [];
  target.forEach((item) => (arr[item] = null));
  return source.some((item) => item in arr);
}

function isIntersect() {
  const obj = {};
  target.forEach((item) => (obj[item] = null));
  return source.some((item) => item in obj);
}

function isIntersect() {
  const entries = target.map((item) => [item]);
  const map = new Map(entries);
  return source.some((item) => map.has(item));
}

function isIntersect() {
  const set = new Set(target);
  return source.some((item) => set.has(item));
}

// Link
// https://itnext.io/the-hidden-cost-of-js-arrays-ae39b5356e52

console.log(isIntersect());
