/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    // top row diags
    if (!matrix || !matrix[0] || matrix.length < 2 || matrix[0].length < 2) return true;
    for (let cdx=0; cdx<matrix[0].length - 1; cdx++) {
        let rdx = 0;
        let _cdx = cdx;
        let dNum = matrix[0][_cdx];
        console.log('--');
        console.log(dNum);
        printMatrix(matrix);
        while ((rdx < matrix.length-1) && (_cdx < matrix[0].length-1)) {
            rdx++;
            _cdx++;
            console.log(`rdx ${rdx}, _cdx: ${_cdx} `);
            console.log(matrix[rdx][_cdx]);
            if (matrix[rdx][_cdx] !== dNum) return false;
        }
    }
    // side based diags
    for (let rdx=1; rdx<matrix.length - 1; rdx++) {
        let cdx = 0;
        let _rdx = rdx;
        let dNum = matrix[_rdx][0];
        while ((cdx < matrix[0].length-1) && (_rdx < matrix.length-1)) {
            _rdx++;
            cdx++;
            if (matrix[_rdx][cdx] !== dNum) return false;
        }
    }
    return true;
};


function printMatrix (matrix) {
    let outp = [];
    for (let row of matrix) {
        outp.push(row.join(' '));
    }
    console.log(outp.join('\n'));
}


let mtrx = [[1,2,3,4],[5,1,2,3],[9,5,1,2]];

console.log(isToeplitzMatrix(mtrx));
