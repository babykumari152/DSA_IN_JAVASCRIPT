class Node{
    constructor(){
        this.data = null;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    prepend(data){
        let node = new Node(data);
        if(!this.head){
            this.head = this.tail = node;
        }
        else{
            node.next = this.head
            this.head = node;
        }
    }
    append(data){
        let node = new Node(data);
        if(!this.tail){
            this.head = this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }
    }
    delete(data){
        let node = this.head;
        let prevNode = this.head;
        while(node && node.data !== data){
            prevNode = node;
            node = node.next;
        }
        if(this.head.data == this.tail.data == data)
           this.head = this.tail = null;
        else
          if(node){
            prevNode.next = node.next;
            if(node == this.tail){
                this.tail = prevNode;
            }
          }   
    }
}