var removeDuplicates = function(nums) {
  if (nums.length < 2) {
    return
  }
  
  let slow = 0
  
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
  } 
 
  /// return the new length of nums
  return slow + 1
}