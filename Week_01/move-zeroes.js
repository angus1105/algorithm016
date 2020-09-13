/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  if (nums.length < 1) {
    return
  }
  
  let slow = 0
  
  for (let fast = 0; fast < nums.length; fast ++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast]
      slow++
    }
  }
  
  for (let i = slow; i < nums.length; i++) {
    nums[i] = 0
  }
};