const QuestionDescription = `
https://leetcode.com/problems/zigzag-conversion/description/
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
`;

function mkZigZag (str, nRows) {
    if (!(str && str.length > 0)) {
        return '';
    }
    let lenCycle = 2 * nRows - 2;
    let grid = new Array(nRows);
    for (let rn=0; rn<nRows; rn++) {
        grid[rn] = new Array( Math.ceil(str.length/2)).fill();
    }
    let rdx, cdx, cCounter;
    let idx = rdx = cdx = cCounter = 0;
    while (idx < str.length) {
        // console.log(grid);
        // console.log(`rdx: ${rdx}; cdx: ${cdx}; idx: ${idx}; cCounter: ${cCounter}`);
        grid[rdx][cdx] = str[idx];
        ++idx;
        ++cCounter;
        if ( cCounter < nRows ) {
            ++rdx;
        } else {
            ++cdx;
            --rdx;
            if (cCounter >= lenCycle) {
                cCounter = 0;
            }
        }
    }
    return grid.map( row => row.filter( _ => _ ).join('') ).join('');
}

console.log("mkZigZag('paypalishiring', 3)  >>>");
console.log(mkZigZag('paypalishiring', 3));

// console.log("mkZigZag('abcdefghijklmnop', 4) >>>");
// console.log(mkZigZag('abcdefghijklmnop', 4));