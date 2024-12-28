const primes = Array.from({ length: 26 }, (_, i) => i+1);
console.log(primes)
// const primes = [];

// for (let index = 1; index < 27; index++) {
//     primes.push(index)    
// }

// /**
//  * @param {number} n
//  * @return {void}
//  */
// const generatePrimes = (n) => {
//     let currentNumber = 3;

//     for (let number = 1; number < n; number += 1) {
//         for (;;) {
//             let isPrime = true;

//             for (const prime of primes) {
//                 if (currentNumber % prime === 0) {
//                     isPrime = false;
//                     break;
//                 }
//             }

//             if (isPrime) {
//                 primes.push(currentNumber);
//                 break;
//             }

//             currentNumber += 2;
//         }
//     }
// };

// generatePrimes();

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    const mapStore = new Map();
    for (let i = 0; i < strs.length; i++) {
        const sortedString = strs[i].split('').sort().join('');
        if (mapStore.has(sortedString)) {
            mapStore.get(sortedString).push(strs[i])
        } else {
            mapStore.set(sortedString, [strs[i]])
        }
    }

    return [...mapStore.values()];
};

const groupOfAnagrams = groupAnagrams(
    // ["eat","tea","tan","ate","nat","bat"]
    ["ac","d"]
)


console.log(groupOfAnagrams)


// Inout 
// ["ac","d"]

// Our output
// [["ac","d"]]

// Output
// [["d"],["ac"]]

