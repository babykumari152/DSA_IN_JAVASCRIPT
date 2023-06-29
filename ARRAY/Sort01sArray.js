function Sort01Array(arr){
    let i =0
    let j = arr.length - 1;
    while(i<j){
        if(arr[i] == 0){
            i = i+1;
        }
       else if(arr[j]==1){
            j = j-1;
        }
        else{
           if(arr[i] == 1 && arr[j] == 0){
            let temp = arr[i]
            arr[i] = arr[j];
            arr[j] = temp;
            i = i+1;
            j=j-1; 
           }
             
        }

    }
    return arr;
}

let arr = [0,1,0,1,1,0,0,1];
arr = Sort01Array(arr);
console.log(arr);