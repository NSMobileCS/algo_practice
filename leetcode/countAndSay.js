/**
 * @param {number} n
 * @return {string}
 */

const countSayCache = ['1']

const nextTerm = function(s){
  let outp = '';
  while ( s && s.length > 0 ) {
    let char = s[0];
    let n = 0;
    while ( s[0] == char ) {
      ++n;
      s = s.slice(1);
    }
    outp += `${n}${char}`;
  }
  return outp;
}

var countAndSay = function(n) {
  if (countSayCache.length < n) {
    for (let idx=countSayCache.length-1; idx<n; idx++) {
      countSayCache.push(nextTerm(countSayCache[countSayCache.length-1]));
    }
  }
  return countSayCache[n-1];
};
