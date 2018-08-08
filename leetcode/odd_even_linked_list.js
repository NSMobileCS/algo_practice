
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// @param {ListNode} head
// @return {ListNode}

var oddEvenList = function(head) {
    if ( !head || !head.next ) {
        return head;
    }
    let odd = true;
    let evenHead = new ListNode(null);
    let oddHead = new ListNode(null);
    let oddCur = oddHead;
    let evenCur = evenHead;
    let cur = head;
    while (cur) {
        let _cur = cur.next;
        if (odd) {
            oddCur.next = cur;
            oddCur = oddCur.next;
        } else {
            evenCur.next = cur;
            evenCur = evenCur.next;
        }

        cur = _cur;
        odd ^= 1;
    }
    head = oddHead.next;
    evenHead = evenHead.next;
    oddCur.next = evenHead;
    if (evenCur && evenCur.next) {
        evenCur.next = null;
    }
    return head;
};

var sllPrint = function(head) {
    let outp = [];
    while (head) {
        outp.push(`(${head.val | null})`);
        head = head.next;
    }
    let outString = outp.join('->');
    console.log(outString);
    return outString;
}

let arr3 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5, 6];
let arr1 = [1, 2, 3];


function mkSLL (arr) {
    let head = new ListNode(null);
    let cur = head;
    arr.forEach( (x) => {
        cur.next = (new ListNode(x));
        cur = cur.next;
    });
    return head.next;
}

let head = mkSLL(arr1);
sllPrint(head);

let outp = oddEvenList(head);
sllPrint(outp);









        // console.log('evenHead:');
        // sllPrint(evenHead);
        // console.log('evenCur:');
        // sllPrint(evenCur);
        // console.log('oddHead:');
        // sllPrint(oddHead);
        // console.log('oddCur:');
        // sllPrint(oddCur);
        // console.log('cur:');
        // sllPrint(cur);
        // console.log('_cur:');
        // console.log((_cur == null));
        // sllPrint(_cur);
        // console.log(`odd: ${odd}`);
        // console.log('-----');