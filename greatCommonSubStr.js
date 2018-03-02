function gcSubStr(arr){
    if (arr.length === 1){return arr[0]}
    if (arr.length < 1){return '';}
    var maxstr = '';
    for (let z=0; z<arr[0].length; z++){
        for (let y = 0; y < z; y++){
            var substr = arr[0].slice(y,z+1); //bug fixed; 2nd index z+1 not z.
            var inAll = true;
            for (let wdx = 1; wdx < arr.length; wdx++){
                if (arr[wdx].indexOf(substr)===-1){
                    inAll = false;
                    break;
                }
            }
            if (inAll && (substr.length > maxstr.length)){
                maxstr = substr;
            }
        }
    }
    return maxstr;
};

var testArrays = {
    'pam':['spam', 'pam', 'diazepam', 'borat_luvs_pamela'],
    'as':['asdf', 'asvab', 'vast'],
    'ring':['springfield', 'bring', 'saturnring'],
    '12345':['112345', '69012345', '0012345', '0123456789', '123456789789987']
};

function testTheArrays(testArrsObj, funcTest){
    for (let item in testArrsObj){
        console.log('expected item:  '+item);
        let res = funcTest(testArrsObj[item]);
        console.log("result:  "+res);
        console.log("answered correctly:  "+String(res==item).toUpperCase());
    }
}

testTheArrays(testArrays, gcSubStr);