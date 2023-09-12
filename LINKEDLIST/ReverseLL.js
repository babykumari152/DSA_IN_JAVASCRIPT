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
    Add(data){
        let node = new Node(data);
        let current = this.head;
        if(current){
            while(current.next){
                current=current.next;
            }
            current.next = node;
        }
        else{
            this.head = node;
        }
    }
    reverse(){
        let prev = null;
        let current = this.head;
        let next = current.next;
        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current= current.next;
        }
        this.head=prev;
    }
    Print(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }

}

var LLS = new LL();
LLS.Add(1);
LLS.Add(2);
LLS.Add(3);
LLS.reverse();
LLS.Print();