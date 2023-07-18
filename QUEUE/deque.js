class Queue{
    constructor(){
        this.queue = [];
    }
    enque(el){
        for(let i = this.queue.length; i>0; i--){
            this.queue[i] = this.queue[i-1];
        }
        this.queue[0] = el;
    }
    deque(){
        this.queue.splice(this.queue.length - 1, this.queue.length);
    }
}
