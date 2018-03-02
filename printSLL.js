function SLL(){
    this.head = null;
  }

function Node(val){
    this.val = val;
    this.next = null;
}

function display(sll){
    var myList = '';
    var runner = sll;
    while (runner) {
        myList += runner.val;
        myList += ', ';
        runner = runner.next;
    }
    if (myList.length > 2) {
        myList = myList.slice(0, myList.length-2);
    }
   return myList;
}


