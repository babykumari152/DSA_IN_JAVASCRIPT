function findPairDiffByK(Array,K){
    let left =0;
    let right=Array.length -1;
    Array.sort();
    while(left < right){
        while(Array[left]==Array[left+1]){
            left +=1;
        }
       let isPossibleIx= isPossileDiff(Array,Math.abs(K+Array[left]))
        if(isPossibleIx>-1){
            console.log(Array[left],Array[isPossibleIx]);

        }
        left +=1;
    }
}
function isPossileDiff(Array,els){
    console.log(els)
    let i =0;
    let j = Array.length - 1;
    while(i<=j){
        let mid = Math.floor((i+j)/2);
        if(Array[mid]==els){
            return mid;
        }
        else if(Array[mid]>els){
            j=mid-1;
        }
        else
            i = mid+1;
    }
    return -1;
}
let A = [1,5,5,4,2,2,5,2,8];
let diff = 3;
findPairDiffByK(A,diff);