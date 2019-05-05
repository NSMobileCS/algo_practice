/**
 * @param {string} word
 * @return {boolean}
 */

const isCapital = (ch) => {
    let codeNum = ch.charCodeAt(0);
    if (codeNum > 64 && codeNum < 91) return true;
    return false;
}

var detectCapitalUse = function(word) {
    if (word.length > 0) {
        let firstChar = word[0];
        if (isCapital(firstChar)) {
            // starts w/ a cpitol.
            let lcFound = false;
            let ucFound = false;
            for (let idx = 1; idx < word.length; idx++) {
                if (isCapital(word[idx])) {
                    ucFound = true;
                    if (lcFound) return false
                } else {
                    lcFound = true;
                    if (ucFound) return false;
                }
            }
        } else {
            for (let idx = 1; idx < word.length; idx++) {
                if (isCapital(word[idx])) {
                    return false;
                }
            }
        }
        return true;
    }
}
