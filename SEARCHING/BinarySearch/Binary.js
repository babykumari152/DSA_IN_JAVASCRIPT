function BinarySearch(arr,first,last,mid,res){
    mid= Math.floor(first + (last-first)/2);
    if(arr[mid] == res){
        return mid;
    }
    if(first>=last){
        return -1
    }
    if(res<arr[mid]){
        end = mid - 1;
    }
    else{
        first = mid +1;
    }
    BinarySearch(arr,first,last,mid,res);
    
    

}
let Arr = [1,4,7,9,18, 22,55,65];
BinarySearch(Arr,0,7,0,18);