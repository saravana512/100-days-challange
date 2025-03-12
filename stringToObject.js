//  output: { a: { b: { c: 'someValue' } } }
//  input: 'a.b.c', 'someValue'

// function stringToObject(string, objValue) {
//   const keys = string.split(".");
//   let result = {}; // Final object to return
//   let current = result; // Pointer to build nested objects

//   for (let i = 0; i < keys.length; i++) {
//     console.log(current, result);
//     if (i === keys.length - 1) {
//       current[keys[i]] = objValue; // Assign the final value
//     } else {
//       current[keys[i]] = {}; // Create nested object if not the last key
//       current = current[keys[i]]; // Move pointer to the next level
//     }
//   }

//   return result;
// }

// const res = stringToObject("a.b.c", "someValue"); // { a: { b: { c: 'someValue' } } }

// console.log(res);

// Shallow copy

// const name = {
//   a: "1",
//   b: "2",
//   c: "3",
//   d: {
//     e: "4",
//     f: "5",
//   },
// };

// const name1 = { ...name };

// // console.log(name.c, name.d.e); // 3 4
// // console.log(name1.c, name1.d.e); // 3 4

// name1.c = "6";
// name1.d.e = "7";

// console.log(name.c, name.d.e); // 3 4
// console.log(name1.c, name1.d.e); // 3 4

// console.log(name, "\n", name1); // 3 4

// Deep copy

const name = {
  a: "1",
  b: "2",
  c: "3",
  d: {
    e: { g: "4" },
    f: "5",
  },
};

// const name1 = JSON.parse(JSON.stringify(name));
const name1 = structuredClone(name);

console.log(name.c, name.d.e); // 3 4
console.log(name1.c, name1.d.e); // 3 4

name1.c = "6";
name1.d.e.g = "7";

console.log(name.c, name.d.e); // 3 4
console.log(name1.c, name1.d.e); // 3 4
