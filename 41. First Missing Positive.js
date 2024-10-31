// 41. First Missing Positive

// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

 

// Example 1:

// Input: nums = [1,2,0]
// Output: 3
// Explanation: The numbers in the range [1,2] are all in the array.
// Example 2:

// Input: nums = [3,4,-1,1]
// Output: 2
// Explanation: 1 is in the array but 2 is missing.
// Example 3:

// Input: nums = [7,8,9,11,12]
// Output: 1
// Explanation: The smallest positive integer 1 is missing.
 

// Constraints:

// 1 <= nums.length <= 105


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let min = 1;
    let max = 1;
    const mapVal = new Map()
    for(let i=0; i<nums.length; i++){
        if(0 < nums[i] && !(min < nums[i])){
            min = nums[i];
        }

        if(max < nums[i] && 0 < nums[i]){
            max = nums[i]
        }

        if(nums[i] > 0){
            mapVal.set(nums[i], true)
        }
    }

    if(min > 1){
        return 1
    }

    let minPositiveNum = null;
    for(let i = min; i <= max; i++){
        if(!mapVal.has(i)) {
            minPositiveNum = i;
            return i
        };
    }

    if(minPositiveNum){
        return minPositiveNum;
    } else {
        return max+1
    }

};

const result = firstMissingPositive([1,3,4,56]);
console.log(result)