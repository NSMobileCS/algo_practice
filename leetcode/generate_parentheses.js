/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n == 1) return ['()'];
    if (n == 2) return ['()()', '(())'];
    if (n < 1) return [];
    if (n == 3) return [
                          "((()))",
                          "(()())",
                          "(())()",
                          "()(())",
                          "()()()",
                        ];
    let arr = generateParenthesis(n-1);
    let res = [];
    arr.forEach(
        (elem) => {
            let newElems = [
                `()${elem}`,
                `${elem}()`,
                `(${elem})`,
            ];
            newElems.forEach(
                el2 => {
                    if (res.indexOf(el2) < 0) {
                        res.push(el2);
                    }
                }
            );
        });
    return res;
};

for (let idx=0; idx<5; idx++) {
    console.log(idx);
    console.log(generateParenthesis(idx));
    console.log('--------------');
}