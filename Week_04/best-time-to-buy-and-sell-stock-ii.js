/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_dp = function(prices) {
  if (prices.length === 0) {
    return 0
  }
  
  let dp = Array.from(new Array(prices.length), item => [])

  for (let i = 0; i < prices.length; i++) {
    if (i === 0) {
      dp[i][0] = 0
      dp[i][1] = -prices[i]
      continue
    }
    // 未持有
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    // 持有
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }

  return dp[prices.length - 1][0]
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_easiest = function(prices) {
  if (prices.length < 2) {
    return 0
  }
  
  let profit = 0

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i]
    }
  }

  return profit
};