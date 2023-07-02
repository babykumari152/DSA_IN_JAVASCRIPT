function BookAllocation(Arr,k){
    let start = 0;
    let sum =0;
    for(let element of Arr){
        sum = sum+element;
    }
    let mid = Math.floor(start + (sum - start)/2);
    let end = sum;
    let ans = 0;
    while(start <= end){
        if(isPossible(Arr,mid,k)){
            ans = mid
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
        mid = Math.floor(start + (end - start)/ 2);
    }
    return ans;
}
function isPossible(Arr,mid,k){
    let subArr_Sum = 0;
    let subArr_Count = 1;
    for(let i of Arr){
        if(subArr_Sum +i <= mid){
            subArr_Sum = subArr_Sum +  i;
        }
        else{
            subArr_Count = subArr_Count +1;
           if(i > mid || subArr_Count > k){
            return false;
           }
           subArr_Sum = i;
           
        }

    }
    return true

}

let A = [10,20,30,40,20]
console.log(BookAllocation(A,3))