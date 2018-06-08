function SLL(){
  this.head = null;
}

function Node(val){
  this.val = val;
  this.next = null;
}

// #1st challenge - write a function to output SLL as string
function display(sll){
  var s = "";
  var current = sll.head;
  while (current.next != null)
    {
      s += current.val;
      s += ', ';
      current = current.next;
    }
  s += current.val;
  return s
}

// #2nd challenge - write a function to append node w/ given val for append(sll, val)
function append(sll, val){
  var current = sll.head;
  while (current.next != null)
  {
    current = curent.next;
  }
  current.next = new Node(val);
  return sll
}


// #3rd challenge - function to pre-pend. as above, but to front of list

var mySLL = new SLL();
mySLL.head = new Node(5);
console.log(mySLL)




mySLL.head.next = new Node(8);
console.log(mySLL)
mySLL.head.next.next = new Node(9);
console.log(mySLL)

function max(sll){
  var runner = sll.head;
  var mx = runner.val;  
}