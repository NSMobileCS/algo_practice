function validateCredCard(ccNums) {
    let lastDig = ccNums.pop();
    console.log(ccNums, lastDig);
    for ( let idx=ccNums.length-1; idx > -1; idx-=2 ) {
        console.log(idx, ccNums[idx]);
        ccNums[idx] = (ccNums[idx] * 2) % 10; //gets us subtract 9 automatically
    }
    console.log(ccNums);
    let sumTotal = 0;
    console.log(ccNums, lastDig);
    ccNums.forEach(
        dig => {
            sumTotal += (dig % 10);
            console.log(sumTotal);
        }
    );
    return ( ( (sumTotal + lastDig) % 10 ) == 0 );
}


console.log(validateCredCard([5,2,2,8,2]));