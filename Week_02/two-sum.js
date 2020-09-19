/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {}
  const result = []

  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]]) {
      result.push(map[target - nums[i]] - 1, i)
    }

    map[nums[i]] = i + 1
  }

  return result
};