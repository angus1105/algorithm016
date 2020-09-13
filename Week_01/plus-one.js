/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let needCarry = true
  
  for (let i = digits.length - 1; i >= 0; i--) {
    if (needCarry) {
      digits[i] = digits[i] + 1 === 10 ? 0 : digits[i] + 1
      needCarry = digits[i] === 0
    }
  }
  
  return needCarry ? [ 1, ...digits ] : digits
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne_manual_insert = function(digits) {
  let needCarry = true
  
  for (let i = digits.length - 1; i >= 0; i--) {
    if (needCarry) {
      digits[i] = digits[i] + 1 === 10 ? 0 : digits[i] + 1
      needCarry = digits[i] === 0
    }
  }
  
  if (needCarry) {
    digits.push(1)
    let prev = 1
    
    for (let i = 0; i < digits.length; i++) {
      const temp = digits[i]
      digits[i] = prev
      prev = temp
    }
  }
  
  return digits
};