function flattenArr (arr) {
    let outString = `[${arr}]`;
    console.log(outString);
    outString = outString.replace( /([a-zA-Z]{1,}\w{0,})/g, " \""+'$&'+"\"");
    console.log(outString);
    return eval(outString);
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
