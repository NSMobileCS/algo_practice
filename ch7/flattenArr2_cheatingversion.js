function flattenArr (arr) { 
    let payLoad = `[${arr}]`;
    console.log(payLoad);
    payLoad = payLoad.replace( /([a-zA-Z]{1,}\w{0,})/g, ' \'$& \'');
    // console.log(payLoad);
    return eval(payLoad);
    // not recommended for production
    // ...what w/ blindly executing the input & crashing on obj's
}



//this builds on a side effect of string building syntax

let a1 = [2, [[4, 6], [8], 10]];
let a2 = [2, [4, 6, 8, 10]];
let a3 = [['cat', ['flat', 'pat']], ['quant', [['aardvarks'], 'application'], ['azerbaijan']]];

console.log(a1);
console.log('flattenArr(a1)');
console.log(flattenArr(a1));
console.log('^ ^ ^ ^ ^ ^ ^');
console.log(' - - - - - - -');
console.log(' ');


console.log(a2);
console.log('flattenArr(a2)');
console.log(flattenArr(a2));
console.log(' ');
console.log('^ ^ ^ ^ ^ ^ ^');
console.log(' - - - - - - -');
console.log(' ');

console.log(a3);
console.log('flattenArr(a3)');
console.log(flattenArr(a3));
console.log(' ');
console.log('^ ^ ^ ^ ^ ^ ^');
console.log(' - - - - - - -');
console.log(' ');
