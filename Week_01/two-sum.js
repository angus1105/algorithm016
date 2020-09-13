/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {}
  
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = i + 1
    }
       
    if (map[target - nums[i]] && map[target - nums[i]] - 1 !== i) {
      return [ map[target - nums[i]] - 1, i ]
    }
  }
};