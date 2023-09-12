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
    Push(data){
        let node = new Node(data);
        let current = this.head;
        if(current){
            node=this.head.next;
        }
        this.head=node;

    }
    findMiddle(){
        let slow=this.head;
        let fast = this.head.next;
        while(fast){
            fast = fast.next;
            if(fast){
                slow = slow.next;
                fast = fast.next;
            }
        }
        return slow;
    }
}
var LLS = new LL();
LLS.Push(5);
LLS.Push(4);
LLS.Push(3);
LLS.Push(2);
console.log(LLS.findMiddle());
