class Node{
    constructor(data){
        this.data = data;
        this.next =null;

    }
}

class LinkedList{
    constructor(node){
        this.head = node;

    }
    Add(data){
        var node = new Node(data);
        if(this.head){
            let current = this.head;
            while(current.next){
              current = current.next;
            }
            current.next = node;
        }
        else{
            this.head = node;
        }
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
    insertAt(index,data){
        let current = this.head;
        let prev = this.head;
        let node = new Node(data);
        let cIndex = 0
       if(index == cIndex){
         this.head =node;
         node.next = current;
       }
       else{
         while(cIndex<index){
            prev = current;
            current = current.next;
            cIndex = cIndex +1;
         }
         prev.next = node;
         node.next=current;

       }
    }
    findAt(index){
        let current = this.head;
        let cIndex = 0;
        while(index < cIndex){
            current = current.next;
            cIndex = cIndex +1;
        }
        return current.data;
    }
    deleteAt(index){
        let cIndex = 0;
        let current = this.head;
        let prev = this.head;
        while(index>cIndex){
            prev = current;
            current = current.next;
        }
        if(current.next)
         prev.next = current.next;
        else
         prev.next = null;

    }
}

var ll = new LinkedList();
ll.Add(6);
ll.Add(7);
ll.insertAt(1,5);
ll.deleteAt(1);
ll.print();
