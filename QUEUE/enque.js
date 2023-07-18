function enque(array,el){
    for(let i =array.length;i>0;i--){
        array[i] = array[i-1];
    }
    array[0]=el;
}

let a = [9,8,7,6];
console.log(enque(a,5));