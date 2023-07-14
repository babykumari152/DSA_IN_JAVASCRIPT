function FindElement(arr,target){
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor(left + (right-left)/2);
    while(left < right){
       
        if(arr[mid]==target)
          return mid;
        if(arr[left] <= arr[mid]){
            if(arr[left] <= target && target < arr[mid])
              right = mid - 1;
            else
              left = mid + 1;  
        }
        else{
          if(arr[mid]<arr[right]){
            if(arr[mid] < target && arr[right] > target){
                left = mid +1;
            }
            else{
                right = mid - 1;
            }
          }

        }  

        mid = Math.floor(left + (right - left)/2);
    }
    return mid;
          
         
    }
    



let a = [7,8,9,1,2,3]

console.log(FindElement(a,9));