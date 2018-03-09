function arrFlat (arr, rc) { 
    if (rc === undefined) {
        rc = 0
    };
    if (arr instanceof Array) {
        if (rc > 0) {
            return arr.map( (t) => arrFlat(t, rc++) );
        } else {
            return [arr.map( (t) => arrFlat(t, rc++) )];
        }
    } else {
        if (rc > 0) {
            return arr;
        } else {
            return [arr];
        }

    }
}

let a1 = [2, [[4, 6], [8], 10]];
let a2 = [2, [4, 6, 8, 10]];
let a3 = [['cat', ['flat', 'pat']], ['quant', [['aardvarks'], 'application'], ['azerbaijan']]];

console.log(`a1 = ${a1}
arrFlat(a1) => ${arrFlat(a1)}`);
console.log("#=#=#=#=#=#=#=#=#");
console.log(`a2 = ${a2}
arrFlat(a2) => ${arrFlat(a2)}`);
console.log("#=#=#=#=#=#=#=#=#");
console.log(`a3 = ${a3}
arrFlat(a3) => ${arrFlat(a3)}`);
