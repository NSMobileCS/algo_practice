/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function(x, y) {
    let z = (x ^ y).toString(2); // store result of XORing x & y, as string of binary repr.
    let zLength = z.length;
    z = z.replace(/1/g, ''); // take out all the ones (digits we want to count)
    return (zLength - z.length); // return change in length from above operation.
}

let x = 1;
let y = 4;

let hamDist = hammingDistance(x, y);
console.log(hamDist, "<-- Should be 2... ");