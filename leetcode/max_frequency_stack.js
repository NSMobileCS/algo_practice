var ListNode = function (val) {
    this.val = val;
    this.next = null;
}

// ListNode.prototype.log = function () {
//     let cur = this;
//     let outp = '';
//     while (cur) {
//         outp += `(${cur.val})->`;
//         cur = cur.next;
//     }
//     outp += '|NULL|';
//     console.log(outp);
// };

var FreqStack = function() {
    this.stack = null;
    this.freqCounts = {};
    this.topFreqVal = 0;  // how frequent is most freq val
};

/**
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    let node = new ListNode(x);
    this.freqCounts[x] = ( this.freqCounts[x] || 0 ) + 1;   // increment count from where it is or zero.
    if (this.freqCounts[x] >= this.topFreqVal) {
        this.topFreqVal = this.freqCounts[x];
        node.next = this.stack;
        this.stack = node;
    } else {
        let cur = this.stack;
        let subFreqs = {};
        while (cur && cur.next) {
            subFreqs[cur.val] = (subFreqs[cur.val] || 0) + 1;
            let nextFreq = this.freqCounts[cur.next.val] || 0;
            if (subFreqs[cur.next.val]) {
                nextFreq -= subFreqs[cur.next.val];
            }
            if (this.freqCounts[x] >= nextFreq) {
                break;
            }
            cur = cur.next;
        }
        node.next = cur.next;
        cur.next = node;
    }
    // this.stack.log();
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let val = this.stack.val;
    this.freqCounts[val] -= 1;
    this.stack = this.stack.next;
    // this.topFreqVal = Math.max(...Object.values(this.freqCounts));
    if (this.stack) {
        this.topFreqVal = this.freqCounts[this.stack.val];
    } else {
        this.topFreqVal = 0;
    }
    return val;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = Object.create(FreqStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 */

var fs = new FreqStack();
var answer = [];
for ( let term of [5, 7, 5, 7, 4, 5] ) {
    fs.push(term);
}

for (let idx=0; idx<4; idx++) {
    console.log(fs.pop());
}

