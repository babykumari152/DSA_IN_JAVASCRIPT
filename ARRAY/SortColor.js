SortColor = (array) =>{
    let mid =0;
    let low=0;
    let high = array.length -1;
    while(mid<=high){
        if(array[mid]==0){
            low += 1;
            mid = mid +1;
        }
        else if(array[mid]==1){
            mid = mid+1;
        }
        else{
            let temp = array[mid];
            array[mid]= array[high];
            array[high] = temp;
            high = high - 1;
        }
    }
    console.log(array);

}
SortColor([2,0,1]);