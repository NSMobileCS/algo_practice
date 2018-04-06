// Speros goes up stairs to stay in shape. sometimes 1 stair at a time, sometimes 2. 
// may change each stair.

const example = `
    1 stair ==> 1 way, [1]
    ____
  /    
  2 stairs ==> 2 ways, [1, 1], [2]


`;


function waysUpStairs (n, arr) {
    if (arr == undefined) {
        arr = [];
    }
    if (n < 1) { 
        return arr;
    }
    if (n == 1) {
        arr.push(1);
        return arr;
    } else {
        let ar2 = arr.map( (_) => _ ); 
        //store identical mapping of arr to ar2 for quick reliable copy
        arr.push(1);
        ar2.push(2);
        return [ waysUpStairs(n-1, arr), waysUpStairs(n-2, ar2) ];
    }
 }

for (let n = 5; n > 0; n--) {
    console.log(`testing n=${n}`);
    console.log(waysUpStairs(n));
    console.log('----------------------------');
}