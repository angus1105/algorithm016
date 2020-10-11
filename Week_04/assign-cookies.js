/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let total = 0

  for (let i = 0; i < s.length; i++) {
    if (total === g.length) {
      return total
    }

    if (s[i] >= g[total]) {
      total ++
    }
  }

  return total
};