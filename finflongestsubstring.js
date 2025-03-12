// Longest Substring Without Repeating Characters
// Medium
// Topics
// Companies
// Hint
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.




const lengthOfLongestSubstring = function(s) {
    // let max = 0;
    // let start = 0;
    // let hash = new Map();
    // for (let i = 0; i < s.length; i++) {
    //     if(hash.has(s[i])){
    //         if(start > max){
    //             max = start;
    //         }
    //         start = 0;
    //         hash.clear();
    //         hash.set(s[i], true);
    //         start++;
    //     } else {
    //         hash.set(s[i], true);
    //         start++;
    //     }
        
    // }
    // return max;

    let maxLength = 0; // To store the length of the longest substring
    let start = 0; // The start index of the current substring
    const charTable = {}; // Hashtable to store the last index of each character

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If the character is already in the table and within the current substring
        if (char in charTable && charTable[char] >= start) {
            start = charTable[char] + 1; // Move the start to the right
        }

        charTable[char] = end; // Update the last index of the character
        maxLength = Math.max(maxLength, end - start + 1); // Update the maximum length
    }

    return maxLength;

}

console.log(lengthOfLongestSubstring("dvdf")) // 3