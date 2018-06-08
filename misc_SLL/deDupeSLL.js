function ListNode (val) {
    this.val = val;
    this.next = null;
}

ListNode.prototype.print = function () {
    let arr = [ (this.val || '*') ];
    let cur = this.next;
    while (cur) {
        arr.push(cur.val);
        cur = cur.next;
    }
    return arr.join('->');
}


function mkSLL (arr) {
    let val = arr.shift();
    let head = new ListNode(val);
    let cur = head;
    while ( arr && arr.length > 0 ) {
        let nextNode = new ListNode(arr.shift());
        cur.next = nextNode;
        cur = nextNode;
    }
    return head;
}

function deDuplicate (head) {
    if (!head || !head.next) return head;
    let buffer = { };
    buffer[head.val] = true;
    let prev = head;
    let cur = head.next;
    while (cur) {
        console.log(buffer);
        if (buffer[cur.val] == true ) {
            console.log(cur.val);
            prev.next = cur.next;
            cur = prev.next;
        } else {
            buffer[cur.val] = true;
            prev = cur;
            cur = cur.next;
        }
    }
    return head;
}

function deDupeNoBuff (head) {
    if (!head || !head.next) return head;
    let rVal = head.val;
    let prev = head;
    let cur = head.next;
    while (cur) {
        if ( cur.val == rVal ) {
            prev.next = cur.next;
            cur = prev.next;
        } else {
            prev = cur;
            cur = prev.next;
        }
    }
    head.next = deDupeNoBuff(head.next);
    return head;
}


let arr  = [ 23, 2, 3, 55, 23, 11, 2, 2 ];

let sll = mkSLL([ 23, 23, 2, 2, 3, 55, 23, 11, 2, 2 ]);
console.log(sll.print());
let deDupedSLL = deDuplicate(sll);
console.log(deDupedSLL.print());


let sll2 = mkSLL([ 23, 23, 2, 2, 3, 55, 23, 11, 2, 2 ]);
let ddSOL = deDupeNoBuff(sll2);
console.log(ddSOL.print());