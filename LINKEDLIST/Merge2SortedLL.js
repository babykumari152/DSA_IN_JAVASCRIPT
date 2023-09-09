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
            this.head = this.tail = new Node(lists[i]);
           }
           else{
            this.tail.next = new Node(lists[i]);
            this.tail = new Node(lists[i]);
            
           }

         }
        }
    
    }
     insertLL(data){
        var node = new Node(data);
        if(!this.head){
            this.head = this.tail = data;
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

let listC = new LL();
console.log(listA);

function merge2SortedLL(A,B,C){
    while(A && B){
        if(A.data > B.data){
            C.head.next = B;
            C.head = B;
            B= B.next;
        }
        else{
          C.head.next = A;
          C.head = A;  
          A=A.next;
        }
    }
    if(A)
      C.next = A;
    if(B)
      C.next = B;

    C.print();
}
merge2SortedLL(listA,listB,listC);