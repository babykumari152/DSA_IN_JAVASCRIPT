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

let listA = new LL([2,6,8,12,15]);
let listB = new LL([5,7,14]);

console.log(listA);

function merge2SortedLL(A,B){
    let AHead = A.head;
    let BHead = B.head;
    let Aprev=null;
    while(AHead && BHead){
        if(AHead.data > BHead.data){
            let temp = JSON.parse(JSON.stringify(BHead));
            temp.next=AHead;
           if(!Aprev) 
             AHead = temp;
           else
             Aprev.next = temp; 
           Aprev = Aprev.next; 
           BHead = BHead.next;
           AHead = Aprev;

        }
        else{
          Aprev = AHead;  
          AHead = AHead.next;
        }
    }
    
    if(BHead)
      Aprev.next = BHead;
    

    console.log(A);
}
merge2SortedLL(listA,listB);
