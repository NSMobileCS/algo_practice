
const URL = 'https://leetcode.com/';

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  let n = 0;
  let p = 0;
  for (let idx=0; idx<longUrl.length; idx++) {
    let charCode = longUrl.charCodeAt(idx);
    console.log(charCodeAt);
    charCodeAt *= Math.pow(2, 8 * idx);
    ++p;
    console.log(charCodeAt, p);

  }
  console.log(n);
  return `https://my-tiny-url/${p.toString(18)}~~${n.toString(18)}/`;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  console.log(shortUrl);
  shortUrl = shortUrl.replace(/https?:\/\/my-tiny-url\//, '');
  shortUrl = shortUrl.replace(/\/$/, '');  // get back to url string (encoded form)
  let p = 10241024102410241024;
  let url = '';
  console.log(shortUrl);
  p = parseInt(shortUrl.slice(shortUrl.indexOf(`~~`)), 18);
  let n = parseInt(shortUrl.slice(shortUrl.indexOf(`~~`), shortUrl.length), 18);
  console.log(p,n);
  for ( let idx = 0; idx < p; idx++ ) {
    console.log(n);
    let txt = String.fromCharCode( n % 256 );
    url += txt;
    n /= 256;
    console.log(n);
    console.log(txt);
    console.log(url);
    console.log('_____________________');
    console.log('_____________________');
  }
  return url;
};



/**
 * Your functions will be called as such:
 * decode(encode(url));
 */


 console.log(decode(encode(URL)));