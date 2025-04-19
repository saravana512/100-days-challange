// aaBBccDee - D
// AAccbDD - b
// eeaccff - a

const str = "eeaccff";

const hashMap = new Map();
const nonRepeatedCharacters = [];
for (let i = 0; i < str.length; i++) {
  if (hashMap.get(str[i])) {
    // no need
    nonRepeatedCharacters.splice(nonRepeatedCharacters.indexOf(str[i]), 1);
  } else {
    hashMap.set(str[i], true);
    nonRepeatedCharacters.push(str[i]);
  }
  // console.log(nonRepeatedCharacters)
}

console.log(nonRepeatedCharacters);

// find if the two letters are anagram , example : silent , listen

const str1 = "silent";
const str2 = "listen";

// Sort method
// check each character

str2;

const checkAnagramOrNot = () => {
  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    // if();
  }

  return true;
};

console.log(checkAnagramOrNot(str1, str2));

// aaBBccDee - aaBBCC
// AAccbDD - AAcc
// eeaccff - ee

// Other approach
// const nonRepeatedStringreturn = (str) => {
//   const hashMap = new Map();
//   const str = '';
//   for(let i=0; i<str.length; i++){
//       if(hashMap.get(str[i]))
//   }
// }

// not able to do
// const nonRepeatedStringreturn = (str) => {
//   let strings = "";
//   let nextChar = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!previousChar) {
//       previousChar = str[i + 1];
//       strings = str[i];
//     } else {
//       // if(previousChar !== str[i]){
//       // break;
//       // } else {
//       //     strings += str[i]
//       // }
//     }
//   }

//   return strings;
// };

// console.log(nonRepeatedStringreturn("aaBBccDee"));

// aaBBccDee - aaBBCC
// AAccbDD - AAcc
// eeaccff - ee

const stringVal = "aaBBccDee";

const hashMapVal = new Map();
for (let i = 0; i < stringVal.length; i++) {
  if (hashMapVal.has(stringVal[i])) {
    hashMapVal.set(stringVal[i], hashMap.get(stringVal[i]) + 1);
  } else {
    hashMapVal.set(stringVal[i], 1);
  }
}
const strArr = stringVal.split("");
for (let ind = 0; ind < strArr.length; ind++) {
  if (hashMapVal.get(strArr[ind]) === 1) {
    strArr.splice(strArr.indexOf(strArr[ind]), strArr.length - 1);
    break;
  }
}

console.log(strArr.join(""));
