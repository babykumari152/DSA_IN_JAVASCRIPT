class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(node){
        this.head = node;
        this.size = 0;
    }
    Append(data){
        let node = new Node(data);
        let current = this.head;
        if(current){
          while(current.next){
            current = current.next;
          }
          current.next = node;
          node.prev=current;
        }
        else{
            this.head = node;
            node.prev = head;
        }
        this.size = this.size + 1;
    }
    Push(data){
        let node = new Node(data);
        let current = this.head;
        node.next=current;
        this.head = node;
        node.prev=this.head;
        this.size = this.size +1;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
    insertAtIndex(index,data){
      let cIndex = 0;
      let node = new Node(data);
      let current = this.head;
      while(cIndex<index){
          current = current.next;
          cIndex = cIndex +1;
      }
      node.prev=current.prev;
      current.prev = node;
      node.next = current;
    }
    Pop(){
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        let prevNode = current.prev;
        prevNode.next = null;
        current.prev = null;
    }
    deleteAtIndex(index){
        if(index==0){
            current = this.head;
            this.head=current.next;
            if(current && current.next)
              current.next.prev = this.head;            
        }
        else{
            let cIndex = 0;
            let current = this.head;
            while(cIndex<index){
                current = current.next;
                cIndex = cIndex +1;
            }
            let prevNode = current.prev;
            prevNode.next = current.next;
            current.next.prev = prevNode;
        }
    }
}
var dll = new DoublyLinkedList();
dll.Push(6);
dll.Push(7);
dll.Append(3);
dll.print();