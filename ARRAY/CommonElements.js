function CommonElements(A,B,C){

    let i =0;
    let j=0
    let k=0;
    while(i<A.length && j<B.length && k<C.length){
        if(A[i] == B[j] && B[j] == C[k]){
            console.log(A[i]);
            i +=1;
            j +=1;
            k +=1;
        }
        else if(A[i]<B[j] && A[i]<C[k]){
            i +=1;
        }
        else if(B[j]<A[i] && B[j]<C[k]){
            j +=1;
        }
        else{
            k +=1
        }
    }
}
let A=[1,5,10,20,40,80];
let B=[6,7,20,80,100];
let C=[3,4,15,20,30,70,80,120];
CommonElements(A,B,C);