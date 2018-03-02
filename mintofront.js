function SLL(){
    this.head = null;
  }

function Node(val){
    this.val = val;
    this.next = null;
}

function minToFront(mySLL) {
    let curMin = mySLL.head;
    let curMinPrev = null;
    let runner = curMin;
    while (runner && runner.next) {
        if (runner.next.val < curMin.val) {
            curMin = runner.next;
            curMinPrev = runner;
        }
        runner = runner.next;
    }
    if (curMinPrev == null) {
        return mySLL;
    }
    curMinPrev.next = curMin.next;
    curMin.next = mySLL.head;
    mySLL.head = curMin;
    return mySLL;
}

function arrToSLL(arr){
    let n = new Node(arr.shift())
    let current = n;
    while (arr.length > 0) {
        current.next = new Node(arr.shift());
        current = current.next;
    }
    let sll = new SLL();
    sll.head = n;
    return sll;
}

let sllArray = arrToSLL([12, 14, 2, 21, 22]);

console.log(sllArray);
console.log(minToFront(sllArray));
