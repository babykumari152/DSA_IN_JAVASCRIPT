class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    Add(data){
        let node = new Node(data);
        if(!this.head){
            this.head = this.tail = node;
        }
        else{
            this.tail.next = node;
            this.tail = node;
        }
    }
    Insert(dataTobeInseted,afterData){
        let node = this.head;
        let newNode = new Node(dataTobeInseted);
        let findNode = this.FindNode(afterData);
        if(findNode){
          newNode.next = findNode.next;
          findNode.next = newNode;
        }
    }
    FindNode(data){
        let node = this.head;
        while(node && node.data !== data){
          node = node.next;
        }
        return node;
    }
    Print(){
        let node = this.head;
        while(node){
            console.log(node.data);
            node = node.next;
        }
    }
}

let list = new LinkedList();
list.Add(6);
list.Add(8);
list.Add(5);
list.Add(2);
list.Print();
list.InsertNode(3,5);

