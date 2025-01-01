var twoSum = function(nums, target) {
    const arr = new Map();
    for(let i=0; i<nums.length; i++){
        const val = target - nums[i];
        if(arr.has(val)){
            return [arr.get(val), i]
        } else {
            arr.set(nums[i], i)
        }
    }
};

console.log(twoSum([2,7,11,15], 9))