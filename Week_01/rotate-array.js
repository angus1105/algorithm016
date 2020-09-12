/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 暴力方式
var rotate_force = function (nums, k) {
  if (k === 0 || nums.length < 2) {
    return
  }

  k = k % nums.length

  let temp, prev

  for (let count = 0; count < k; count ++) {
    prev = nums[nums.length - 1]

    for (let i = 0; i < nums.length - 1; i ++) {
      temp = nums[i]
      nums[i] = prev
      prev = temp
    }
  }
}

// 利用额外数组
var rotate_force_2 = function (nums, k) {
  if (k === 0 || nums.length < 1) {
    return
  }
  
  k = k % nums.length
  
  const tmpArray = Object.keys(Array.from(nums.length)).map((item, index) => index)
  
  for (let i = 0; i < nums.length; i ++) {
    
    if (i < k) {
      tmpArray[i] = nums[nums.length - k + i]
    } else {
      tmpArray[i] = nums[i - k]
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    nums[i] = tmpArray[i]
  }
}

