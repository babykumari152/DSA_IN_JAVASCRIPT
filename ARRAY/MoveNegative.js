function MoveNegative(array){
    let left =0;
    let right = array.length -1;
    while(left<right){
        if(array[left]<0)
          left = left +1;
        else if(array[right]>0)
         right = right -1;
        else if(array[right]<0){
            let temp = array[right];
            array[right] = array[left];
            array[left] = temp;
            left =left + 1;
        }
        else{
            let temp = array[right];
            array[right] = array[left];
            array[left] = temp;
            right = right -1;
        }
    }
    console.log(array);
}
MoveNegative([2,-3,-1,5,-4]);