function Partioning(A){
    let pIndex = 1;
    let piviot = A[0];
    for(i = 1 ; i< A.length; i++){
        if(A[i]<=piviot){
            let temp = A[pIndex];
            A[pIndex] = A[i]
            A[i]=temp;
            pIndex = pIndex + 1;
        }
    }
    [A[0], A[pIndex - 1]] = [A[pIndex - 1], A[0]];
    return A

}
let A = [3,8,1,5,7,2];
console.log(Partioning(A))