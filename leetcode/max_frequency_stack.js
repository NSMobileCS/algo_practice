var ListNode = function (val) {
    this.val = val;
    this.next = null;
}


var FreqStack = function() {
    this.stack = null;
    this.freqCounts = {};
    this.topFreqVal = 0;  // how frequent is most freq val 
    // this.update = () => {
    //     this.stack.sort( 
    //         (a,b) => {
    //             let A = this.freqCounts[a]; 
    //             let B = this.freqCounts[b];
    //             if (A > this.topFreqVal) {
    //                 this.topFreqVal = A;
    //             };
    //             if (B > this.topFreqVal) {
    //                 this.topFreqVal = B;
    //             }
    //             return ( A - B );
    //         } 
    //     );
    // };
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
        while (cur && cur.next) {
            let nextFreq = this.freqCounts[cur.next.val] || 0;
            if (this.freqCounts[x] >= nextFreq) {
                break;
            }
            cur = cur.next;
        }
        node.next = cur.next;
        cur.next = node;
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let val = this.stack;
    --this.freqCounts[val];
    this.stack = this.stack.next;
    this.topFreqVal = this.freqCounts[this.stack.val];
    return val;
    // for ( let idx = this.stack.length - 1; idx > -1; idx-- ) {
    //     let term = this.stack[idx];
    //     if ( this.freqCounts[term] == this.topFreqVal ) {
    //         --this.freqCounts[term];
    //         this.stack.splice(idx, 1);
    //         this.topFreqVal = Math.max(...Object.values(this.freqCounts));
    //         return term;
    //     }
    // }
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = Object.create(FreqStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 */
