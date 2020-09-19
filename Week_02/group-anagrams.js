/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// force
var groupAnagrams = function(strs) {
  if (strs.length < 2) {
    return [ strs ]
  }

  /// a 和 b是否为字母异位词
  const isAnagrams = (a, b) => {
    if (a.length != b.length) {
      return false
    }

    const map = {}

    for (let i = 0; i < a.length; i++) {
      if (map[a[i]]) {
        map[a[i]]++
      } else {
        map[a[i]] = 1
      }
    }

    for (let i = 0; i < a.length; i++) {
      if (map[b[i]]) {
        map[b[i]]--
      } else {
        return false
      }
    }

    return true
  }
  // 通过 hashmap去解决
  const map = {}

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort()
    
    if (!map[key]) {
      map[key] = []
    }
    map[key].push(strs[i])
  }

  return Object.keys(map).map(item => {
    return map[item]
  })
};