// 1945. Sum of Digits of String After Convert

// You are given a string s consisting of lowercase English letters, and an integer k.

// First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26). Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.

// For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:

// Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
// Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
// Transform #2: 17 ➝ 1 + 7 ➝ 8
// Return the resulting integer after performing the operations described above.

 

// Example 1:

// Input: s = "iiii", k = 1
// Output: 36
// Explanation: The operations are as follows:
// - Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
// - Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
// Thus the resulting integer is 36.
// Example 2:

// Input: s = "leetcode", k = 2
// Output: 6
// Explanation: The operations are as follows:
// - Convert: "leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
// - Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
// - Transform #2: 33 ➝ 3 + 3 ➝ 6
// Thus the resulting integer is 6.
// Example 3:

// Input: s = "zbax", k = 2
// Output: 8
 

// Constraints:

// 1 <= s.length <= 100
// 1 <= k <= 10
// s consists of lowercase English letters.




/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {

    // My sollution

    let numstr = ''
    for(let i=0; i<s.length; i++){
        const val=  Math.abs(96 - s[i].charCodeAt())
        numstr += val
    }
    let tot = 0;

    const transFunc = (numstr) => {
        return numstr.split('').reduce((acc, v) => +acc+ +v, 0);
    }

    for(let i=0; i<k; i++){
        if (i===0){
            if(k === 1){
                tot = transFunc(numstr);
                break;   
            }else{
                tot = transFunc(numstr);
            }
        }
        else if (k > 1 && k === i+1){
            tot = transFunc(tot.toString());
            break;
        } else {
            tot = transFunc(tot.toString())
        }
    }

    return tot
};

// My sollution 58 ms tot mem 58 mb;

// Other sollutions (GPT)
var getLucky = function(s, k) {
    // Convert the string `s` into a number string by converting each character to its corresponding value
    let numstr = s.split('').map(char => char.charCodeAt(0) - 96).join('');

    // Convert the number string to a sum of its digits
    let tot = numstr.split('').reduce((acc, v) => acc + +v, 0);

    // Apply the transformation `k - 1` more times
    for (let i = 1; i < k; i++) {
        tot = tot.toString().split('').reduce((acc, v) => acc + +v, 0);
    }

    return tot;
};
