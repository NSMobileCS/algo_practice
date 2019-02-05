/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let output = [];
    let totalProd = 1;
    let zeroes = 0;
    nums.forEach(
        n => {
            if (n !== 0) {
                totalProd *= n;
            } else {
                zeroes += 1;
            }
        }
    );
    if (zeroes > 1) {
        return Array(nums.length).fill(0);
    }
    nums.forEach(
        n => {
            if (n === 0) {
                output.push(totalProd);
            } else {
                if (zeroes > 0) {
                    output.push(0);
                } else {
                    output.push(totalProd / n)
                }
            }
        }
    );
    return output;
};


let arr1 = [1, 2, 3, 4];
console.log(`
            arr1 = [${arr1}], 
            expeted = [24,12,8,6],
            result = [${productExceptSelf(arr1)}]
            `);

let arr2 = [0, 0];
console.log(`
            arr2 = [${arr2}], 
            expeted = [0, 0],
            result = [${productExceptSelf(arr2)}]
            `);

let arr3 = [1, 0];
console.log(`
            arr3 = [${arr3}], 
            expeted = [0, 1],
            result = [${productExceptSelf(arr3)}]
            `);