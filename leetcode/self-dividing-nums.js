/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var isSelfDividing = function(n) {
  let digs = n.toString().split('').map(Number);
  for (let d of digs) {
    if (n % d !== 0) return false;
  }
  return true;
}

var selfDividingNumbers = function(left, right) {
  let outp = [];
  for (let idx = left; idx <= right; idx++) {
    if (isSelfDividing(idx)) outp.push(idx);
  }
  return outp;
};
