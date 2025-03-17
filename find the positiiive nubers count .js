var maximumCount = function (nums) {
  const map = new Map();
  let positiveCount = 0;
  for (let i = 0; i < Math.round(nums.length / 2); i++) {
    if (nums[i] >= 0 && !map.has(nums[i])) {
      positiveCount++;
      map.set(nums[i], true);
    }

    if (nums[nums.length - i] >= 0 && !map.has(nums[i])) {
      positiveCount++;
      map.set(nums[nums.length - i], true);
    }
  }

  return positiveCount;
};

console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
