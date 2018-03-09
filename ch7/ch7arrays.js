function isBalancedArr2 (arr) {
    let sum = 0;
    arr.forEach( (t) => sum += t );
    if (sum % 2 !== 0){
        return false;
    }
    let halfSum = sum / 2;
    sum = 0; //reset sum to zero because we don't need the whole sum anymore
    for (let idx=0; idx<arr.length; idx++){
        sum += arr[idx];
        if (sum === halfSum){
            return true;
        }
    }
    return false;
}

function isBalancedArr25(arr){
    var ri = arr.elgnth-1;
    var li = 0;
    var rSum = arr[arr.length -1];
    var lSum = arr[0];
    while(li <ri){
        if(lSum < rSum){
            li += 1;
            lSum += arr[li]
            continue;
        }
        if(lSum > rSum){
            ri -= 1;
            rSum += arr[ri];
            continue;
        }
        if(lSum ===rSum){
            ri -= 1;
            li += 1;
            lSum += arr[li];
            rSum += arr[ri];
        }
    }
    if(lSum ===rSum){
        if(li == ri && arr[li]!==0){
            return false;
        }
        return true;
    }
    return false;
}


function isBalancedArr(arr){
    if (arr.length === 1) return false;
    var li = 0;
    var ri = arr.length-1;
    var rSum = arr[ri];
    var lSum = arr[li];
    while(li+1 < ri){
        // console.log(arr);
        // console.log('beginning of while loop');
        // console.log(`lsum ${lSum} rSum ${rSum} ri ${ri} li ${li}`);
        if(lSum <= rSum){
            li += 1;
            lSum += arr[li];
        } else {
            ri -= 1;
            rSum += arr[ri];
        }
        // console.log('ending of while loop');
        // console.log(`lsum ${lSum} rSum ${rSum} ri ${ri} li ${li}`);
    }
    return (lSum === rSum);
}

function hasBalIdx(arr, lSum, rSum){
    if (lSum === undefined) {
        [lSum, rSum] = [0, 0];
    }
    if (arr.length > 1) {
        if (rSum > lSum){
            lSum += arr.shift();
            return hasBalIdx(arr, lSum, rSum);
        } else {
            rSum += arr.pop();
            return hasBalIdx(arr, lSum, rSum);
        }
    }
    if (arr.length === 1) {
        return (lSum === rSum);
    }
    return false;
}

const expectTrues = [
    [1, 2, 3, 4, 10],
    [9, 9, 2, 8, 8],
    [3, 4, 0, 7]
]
const expectFalses = [
    [1, 4, 6],
    [3, 4, 2, 8],
    [1, 1, 1, 1, 1]
]


function printAndTest(arr){
    console.log(arr);
    console.log(isBalancedArr(arr));
}

function printAndTest2(arr){
    console.log(arr);
    console.log(hasBalIdx(arr));
}

// console.log('expected trues: ');
// expectTrues.forEach(arr => console.log(isBalancedArr(arr)));

// expectTrues.forEach(printAndTest)

// console.log('----');
// console.log('expected falses: ');
// expectFalses.forEach(arr => console.log(isBalancedArr(arr)));


const expectTrues2 = [
    [1, 2, 3, 4, 99, 10],
    [9, 9, 99, 2, 8, 8],
    [3, 4, 0, 7]
]
const expectFalses2 = [
    [1, 4, 6],
    [3, 4, 2, 8],
    [1, 1, 1, 1]
]

console.log('expected trues: ');

expectTrues2.forEach(printAndTest2)

console.log('----');
console.log('expected falses: ');
expectFalses2.forEach(printAndTest2);
