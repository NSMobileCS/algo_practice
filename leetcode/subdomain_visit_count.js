/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(domainFreqPairs) {
    let d = {};
    for (let pair of domainFreqPairs) {
        let term = pair.split(' ');
        let [ nStr, urlStr ]  =  [ term[0], term[1] ];
        let [ n, urlArr ] = [ Number(nStr), urlStr.split('.') ];
        for (let idx = urlArr.length-1; idx > -1; idx--) {
            let key = urlArr.slice(idx).join('.');
            d[key] = ( (d[key]) ? (d[key] + n) : n ) // add n, or if key not present, set eq n.
        }
    }
    return Object.keys(d).map( key => `${d[key]} ${key}` );
};
