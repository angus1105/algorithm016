/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n === 0) {
    return 1
  }

  if (n === 1) {
    return x
  }

  const pow = _n => {
    if (_n === 1) {
      return x
    }

    if (_n === -1) {
      return 1 / x
    }

    let sub_n

    if (Math.abs(_n) % 2 !== 0) {
      sub_n = (_n - 1) / 2
      let sub_res = pow(sub_n)
      return sub_res * sub_res * x
    } else {
      sub_n = _n / 2
      let sub_res = pow(sub_n)
      return sub_res * sub_res
    }
  }

  return pow(n)
};