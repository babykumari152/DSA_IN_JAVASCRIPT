function Pivot(arr){

    let left = 0;
    let right = arr.length-1;
    while(left<right){
        
        mid = Math.floor(left + (right -left)/2);
        console.log(left,right,mid,'l')
        if(arr[mid]<arr[mid-1])
          return mid - 1;
        else if(arr[mid+1]<arr[mid])
          return mid + 1
        if(arr[mid]<arr[right])
           left = mid +1
        else
           right = mid; 
        console.log(left,right,mid)      
            
    }
    return right;

}

let a = [7,9,12,19,1]
console.log(Pivot(a))
