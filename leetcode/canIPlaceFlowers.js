/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {

    let idx=0;
    if (flowerbed.length < 2 && n < 2 && flowerbed[0] === 0) return true;
    if ( (flowerbed[0] === 0) && (flowerbed[1] === 0) ) {
        flowerbed[0] = 1;
        n--;
        idx += 1;
        // console.log(`idx: ${idx} | n: ${n} | flowerbed: ${flowerbed}` );
    }
    while (idx < flowerbed.length-2) {
        // console.log(`idx: ${idx} | n: ${n} | flowerbed: ${flowerbed}` );
        if (flowerbed[idx] === 0 && flowerbed[idx+1] === 0 && flowerbed[idx+2] === 0) {
            n--;
            flowerbed[idx+1] = 1;
            idx++;
            if (n < 1) {
                return true;
            }
        }
        idx++;
    }
    if (n === 1) {
        if (flowerbed[flowerbed.length-1] === 0 && flowerbed[flowerbed.length-2] === 0) {
        //if it ends in 2 zeroes, we have room for one more
            return true;
        }
    }
    return n < 1;
};


let flowerbed1 = [1,0,0,0,1];

console.log(canPlaceFlowers([1,0,0,0,0,0,1], 2));
console.log('^ should be true');
console.log(canPlaceFlowers(flowerbed1, 2));
console.log('^ should be false');



console.log(canPlaceFlowers([0, 0, 1, 0, 0, 0, 1], 1));
console.log('^ should be true');
console.log(canPlaceFlowers([0, 0, 1, 0, 0, 0, 1], 2));
console.log('^ should be true');





console.log(canPlaceFlowers([0, 0, 0, 0, 1, 0, 0, 0, 1], 2));
console.log('^ should be true');
console.log(canPlaceFlowers([0, 0, 0, 0, 1, 0, 0, 0, 1], 3));
console.log('^ should be true');
console.log(canPlaceFlowers([0, 0, 0, 0, 1, 0, 0, 0, 1], 4));
console.log('^ should be false');