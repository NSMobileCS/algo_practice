// function flatten(arr) {
//     let outp = [];
//     arr.forEach(
//         (elem) => {
//             if (elem instanceof Array) {
//                 outp.push(flatten(elem));
//             } else {
//                 outp.push(elem);
//             }
//         }
//     );
//     return outp;
// }

function flatten(arr) {
    let outp = [];
    for (let elem of arr) {
        try {
            elem.forEach(
                (subElem) => {
                    outp.push(flatten(subElem));
                }
            );
        }
        catch (err) {
            outp.push(elem);
        }   
    }
    return outp;
}

let a1 = ['cat', ['flat', 'pat'], 'quant', ['aardvarks', 'application'], ['azerbaijan']];
let a2 = flatten(a1);
console.log(a2);