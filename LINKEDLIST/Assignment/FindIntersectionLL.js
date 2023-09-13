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
    push(node){
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
}
function findIntersection(LLAHead,LLBHead) {
    let LLA = LLAHead.head;
    let LLB = LLBHead.head;
    let a =0;
    let b = 0;
   while(LLA.next && LLB.next){
    LLA = LLA.next;
    LLB = LLB.next;
    a=a+1;
    b=b+1;
   }
   if(LLA.next){
    while(LLA.next){
        LLA = LLA.next;
        a= a+1
    }
   }
   if(LLB.next){
    while(LLB.next){
        LLB=LLB.next;
        b=b+1;
    }
   }
   let AHead = LLAHead.head;
   let BHead = LLBHead.head;
   if(a>b){
    let c = a-b;
    while(c){
     AHead = AHead.next;
     c=c-1;
    }
   }
   else{
    let c=b-a;
    while(c){
        BHead = BHead.next;
        c=c-1;
    }
   }
   while(AHead && BHead ){
    if(AHead.data == BHead.data && AHead.next === BHead.next){
        console.log(AHead.data);
        return;
    }
    AHead = AHead.next;
    BHead = BHead.next;
   }
};
let LLA = new LL();
let LLB = new LL();
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
LLA.push(node1);
LLA.push(node2);
LLA.push(node3);
LLA.push(node4);
let node11 = new Node(1);
let node12 = new Node(2);
let node13 = new Node(3);
LLB.push(node11);
LLB.push(node12);
LLB.push(node13);
LLB.push(node3)
findIntersection(LLA,LLB);
