// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var firstMissingPositive = function(nums) {
//     const n = nums.length;

//     // Place each number at its correct position if possible
//     for (let i = 0; i < n; i++) {
//         console.log( 
//             nums[i] > 0 , // Higher than 0 
//             nums[i] <= n , // Should not exceded the num[i] value in the array length
//             nums[nums[i] - 1] !== nums[i], 
//             nums[i],
//             nums[nums[i] - 1],
//             i, "vvvvv"
//         )
//         while (
//             nums[i] > 0 && // Higher than 0 
//             nums[i] <= n && // Should not exceded the num[i] value in the array length
//             nums[nums[i] - 1] !== nums[i]
//         ) {
//             console.log( 
//                 nums[i] > 0 , // Higher than 0 
//                 nums[i] <= n , // Should not exceded the num[i] value in the array length
//                 nums[nums[i] - 1] !== nums[i], 
//                 nums[i],
//                 nums[nums[i] - 1],
//                 i, "ch"
//             )         
//             console.log(nums, "before")
//             // Swap nums[i] to its correct position
//             const correctIndex = nums[i] - 1;
//             [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
//             console.log(nums, "after")

//         }
//     }

//     // Find the first missing positive
//     for (let i = 0; i < n; i++) {
//         if (nums[i] !== i + 1) {
//             return i + 1;
//         }
//     }

//     // If all numbers are in place, return n + 1
//     return n + 1;
// };

// console.log(firstMissingPositive([7, 8, 5, 1,2,0]));


















// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

const nums = [1,2,3,4,5,6,7], k = 3;

const rev = (arr, start, end) => {
    for(let i=start; i<end; i++){
        // while(0 < arr.length){
        // if(start < end){
            [arr[i], arr[end-i]] = 
            [arr[end-i], arr[i]]
        // }
        // }
    }
    return arr;   
}

console.log(rev(nums, 0, nums.length-1))