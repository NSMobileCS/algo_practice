function SLNode(val){
    this.val = val;
    this.next = null;
}

function SLQueue(){
    var head = null;
    var tail = null;
}

// function SLQueue(){
//     this.head = null;
//     this.tail = null;
// }

// SLQueue.prototype.enqueue = function (val) {
//     let newNode = new SLNode(val);
//     newNode.next = this.tail;
//     this.tail = newNode;
// }

SLQueue.prototype.enqueue = function (val) {
    let newNode = new SLNode(val);
    this.tail.next = newNode;
    this.tail = this.tail.next;
}



var q = new SLQueue();
q.head = q.tail = new SLNode('a');
console.log('after dubious syntax call...');
console.log(q);
q.enqueue("B");
console.log('after enque(u)...');
console.log(q);
console.log(q.head);
console.log(q.tail);
q.enqueue("C");
console.log('after enque(u)...');
console.log(q);
console.log(q.head);
console.log(q.tail);