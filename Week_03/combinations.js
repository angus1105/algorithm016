/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const result = []
  const array = Array.from(new Array(n)).map((item, index) => index + 1)
  const value = []

  const _combine = (path, start) => {
    if (path.length === k) {
      result.push([ ...path ])
      return
    }

    for (let i = start; i < array.length; i++) {
      const item = array[i]
      path.push(item)
      _combine(path, i + 1)
      path.pop()
    }
  }

  _combine(value, 0)
  return result
};