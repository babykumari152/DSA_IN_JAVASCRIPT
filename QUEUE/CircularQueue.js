class Queue{
    constructor(n){
        this.length=n;
        this.array =new Array(n);
        this.front=0;
        this.tail=0;
    }
    enque(el){
      if((this.tail+1)%this.length==this.front){
        throw new Error("Overflow");
      }
      else{
        this.array[this.tail]=el;
        this.tail = (this.tail +1)%this.length;
      }
    }
    deque(){
        if(this.tail==this.front){
            throw new Error("Underflow");
        }
        else{
          let el=this.array[this.front];
          this.front = (this.front+1)%this.length;
          return el;
        }
    }
}

let q=new Queue(5);
try{
  q.enque(1);
  q.enque(1);
  q.deque();
  q.enque(1);
  q.enque(1);
  q.enque(1);
  q.enque(1);
  q.enque(1);
}
catch(e){
    console.log(e.message);
}