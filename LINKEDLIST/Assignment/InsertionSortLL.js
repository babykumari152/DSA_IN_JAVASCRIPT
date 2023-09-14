class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LL{
    constructor(node){
        this.head = node;
    }
    Append(data){
        let node = new Node(data);
        if(this.head){
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }

    }
}
function InsertionSorting(A){
    let AHead = A.head;
    AHead = AHead.next;
    let mainPrev = A.head;
    while(AHead){
      let current = A.head;
      let prev = null;
      while(current !== AHead && current.data < AHead.data){
        prev = current;
        current = current.next; 
      }
      let temp = JSON.parse(JSON.stringify(AHead));
      temp.next = prev;
      prev.next = temp;
      mainPrev.next = AHead.next;
      AHead = AHead.next;
    }

}

let LLA = new LL();
LLA.Append(3);
LLA.Append(1);
LLA.Append(9);
LLA.Append(2);