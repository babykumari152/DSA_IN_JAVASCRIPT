function SwapAlternate(arr){
    let i =0;
    while(i<arr.length - 1){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        i=i+2;
    }
}