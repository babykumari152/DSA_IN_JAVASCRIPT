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
    Append(data){
        let node = new Node(data);
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
}
function InsertionSorting(A){
    let currentNode = A.head;
    let CurrentNodePrev = null;
    let currentIndex = 1;
    while(currentNode){
        let itemToBeSorted = currentNode;
        let compareStart = A.head;
        let compareIndex = 1;
        let comparePrev = null;
        while(compareIndex<currentIndex && compareStart.data<currentNode.data){
           comparePrev = compareStart;
           compareStart = compareStart.next;
           compareIndex = compareIndex +1;
        }
        if(compareIndex<currentIndex){
            if(comparePrev){
                comparePrev.next = currentNode;
                currentNode.next = compareStart;
                

            }
            else{
               A.head = compareStart;
               comparePrev.next = compareStart.next;
            }
        }
    currentIndex = currentIndex +1;
    CurrentNodePrev = currentNode;
    currentNode = currentNode.next;
    }
    // while(AHead){
    //   let current = A.head;
    //   let prev = null;
    //   while(current !== AHead && current.data < AHead.data){
    //     prev = current;
    //     current = current.next; 
    //   }
    //   let temp = JSON.parse(JSON.stringify(AHead));
    //   if(!prev){
    //     temp.next=A.head;
    //     A.head = temp;
    //     AHead.next = AHead.next;
    //   }
    //   else{
    //     let temp = current;
    //     prev.next = current.next;
        
    //   }
    //   AHead = AHead.next;
    // }

}

let LLA = new LL();
LLA.Append(3);
LLA.Append(1);
LLA.Append(9);
LLA.Append(2);
InsertionSorting(LLA);