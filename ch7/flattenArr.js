function flattenArr (arr) {
    let outp = [];
    let term;
    while ( term = arr.shift() ) {      //'pop' values off from Left side 1 by 1.
        if ( !(term instanceof Array) ) {
            outp.push(term);            // push non nested array values to output
        } else {
            flattenArr(term).forEach( (t) => outp.push(t) );
        }                               //use recursive call + .forEach to get nested array's values added
    }
    return outp;
}

let a1 = [2, [[4, 6], [8], 10]];
let a2 = [2, [4, 6, 8, 10]];
let a3 = [['cat', ['flat', 'pat']], ['quant', [['aardvarks'], 'application'], ['azerbaijan']]];

console.log(a1);
console.log('flattenArr(a1)');
console.log(flattenArr(a1));
console.log('^^^^^^^');
console.log('-------');
console.log(a2);
console.log('flattenArr(a2)');
console.log(flattenArr(a2));
console.log('^^^^^^^');
console.log('-------');
console.log(a3);
console.log('flattenArr(a3)');
console.log(flattenArr(a3));
console.log('^^^^^^^');
console.log('-------');
