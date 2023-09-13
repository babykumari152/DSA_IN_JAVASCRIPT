class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LL{
    constructor(lists){
        this.head = null;
        this.tail = null;
        if(lists){
           
         for(let i=0; i< lists.length; i++){
           if(!this.head){
            this.head = new Node(lists[i]);
           }
           else{
            let current = this.head;
            while(current.next){
                current =current.next;
            }
            current.next = new Node(lists[i]);
            
            
           }

         }
        }
    
    }
     insertLL(data){
        var node = new Node(data);
        if(!this.head){
            this.head  = data;
        }
        else{
            
            this.tail.next = node;
            this.tail=node;
        }
     }
     print(){
        let node = this.head;
        while(node){
            console.log(node.data);
            node = node.next;
        }
     }

}

let listA = new LL([2,6,8]);
let listB = new LL([5,7,9]);

console.log(listA);

function merge2SortedLL(A,B){
    let AHead = A.head;
    let BHead = B.head;
    while(AHead.next && BHead.next){
        if(AHead.data > BHead.data){
            let temp = BHead;
            BHead.next=AHead;
           AHead = BHead;
           BHead = BHead.next;

        }
        else{
          AHead = AHead.next;
        }
    }
    
    if(BHead)
      AHead.next = BHead;
    

    A.print();
}
merge2SortedLL(listA,listB);
