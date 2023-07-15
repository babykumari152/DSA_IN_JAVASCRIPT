class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class LinkedList{
    constructor(node){
        this.head = node;
        this.tail = node;
    }
    InsertNode(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;

        }
    }
}
let list = new LinkedList();
list.InsertNode(8);
list.InsertNode(10);
list.InsertNode(5);