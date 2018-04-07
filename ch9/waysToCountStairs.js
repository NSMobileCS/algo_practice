// Speros goes up stairs to stay in shape. sometimes 1 stair at a time, sometimes 2. 
// may change each stair.

const example = `
    1 stair ==> 1 way, [1]
    ____
  /    
  2 stairs ==> 2 ways, [1, 1], [2]


`;


function waysUpStairs (nSteps) { 
    let ways = [ [] ];
    while (nSteps > 1) {
        nSteps -= 2;
        let newSide = ways.map(
            (s1) => {
                let s2 = s1.slice();
                s1.push(1,1);
                s2.push(2);
                return s2;
            }
        );
        ways = ways.concat(newSide);
    }
    if (nSteps > 0) {
        return ways.map( s1 => s1.concat([1]) );
    } else {
        return ways;
    }
}

for (let n = 0; n < 7; n++) {
    console.log(`testing n=${n}`);
    console.log(waysUpStairs(n));
    console.log('----------------------------');
}