/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  // 初始零钱
  const map = {
    '5': 0,
    '10': 0
  }

  let result = true

  for (let i = 0; i < bills.length; i++) {
    /// 本次给 5 美元，无需找零，存起来
    if (bills[i] === 5) {
      map['5'] ++
    }
    // 本次给的是10美元，需要找零5美元，5美元存量-- 10美元存量++
    if (bills[i] === 10) {
      map['5'] --
      map['10'] ++
      // 如果5美元数量小于0 则不够本次找零
      if (map['5'] < 0) {
        result = false
        break
      }
    }
    // 本次给20， 找零1张5美元+1张10美元 或者 3张5美元
    if (bills[i] === 20) {
      // 优先用10美元找零
      if (map['5'] > 0 && map['10'] > 0) {
        map['5']--
        map['10']--
      } else if (map['5'] > 2) {
        map['5'] = map['5'] - 3
      } else {
        result = false
        break
      }
    }
  }

  return result
};