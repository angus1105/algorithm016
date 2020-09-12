/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// force 1
var merge = function(nums1, m, nums2, n) {
  nums1.length = m
  for (let i = m; i < m + n; i ++) {
    nums1.push(nums2[i - m])
  }
  
  nums1.sort((a, b) => a - b)
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge_rear_to_front = function(nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let p = nums1.length - 1
  
  while (p1 >= 0  && p2 >= 0) {
    if (nums1[p1] < nums2[p2]) {
      nums1[p] = nums2[p2]
      p2--
    } else {
      nums1[p] = nums1[p1]
      p1--
    }
    
    p--
  }
  
  function arrayCopy(src, srcIndex, dest, destIndex, length) {
    dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
  }

  arrayCopy(nums2, 0, nums1, 0, p2 + 1);
};