/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = [];
    let totalProd = 1;
    nums.forEach( n => totalProd *= n );
    nums.forEach( n =>  n != 0 ? output.push(totalProd / n) : output.push(0) );
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
            expeted = [24,12,8,6],
            result = [${productExceptSelf(arr2)}]
            `);

let arr2 = [1, 0];
console.log(`
            arr2 = [${arr2}], 
            expeted = [24,12,8,6],
            result = [${productExceptSelf(arr2)}]
            `);