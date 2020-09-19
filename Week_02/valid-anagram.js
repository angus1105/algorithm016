/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram_using_sort = function(s, t) {
  if (s.length !== t.length) {
    return false
  }
  
  return s.split('').sort().join('') === t.split('').sort().join('')
};


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram_with_map = function(s, t) {
  if (s.length != t.length) {
    return false
  }
  
  const map = {}
  
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]] ++
    } else {
      map[s[i]] = 1
    }
  }
  
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) {
      return false
    }
    
    map[t[i]]--
  }
  
  return true
};