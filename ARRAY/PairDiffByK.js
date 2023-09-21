function findPairDiffByK(Array,diff){
    Array.sort();
    let left=0;
    let right=0;
    while(left<Array.length && right<Array.length){
        while(Array[left] == Array[left +1]){
            left +=1;
        }
        while(Array[right] == Array[right+1]){
            right +=1;
        }
        if(Array[right]-Array[left]>diff){
            left +=1;
        }
        else if(Array[right]-Array[left]<diff){
            right +=1;
        }
        else{
            console.log(Array[left],Array[right]);
            left +=1;
            right +=1;
        }
    }
}
let A = [1,5,5,4,2,2,5,2];
let diff = 3;
findPairDiffByK(A,diff);