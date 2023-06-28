function FindUniqueOne(Arr){
    let res = 0;
    for(i of Arr){
        res = res^i;
    }
    return res;

}

console.log(FindUniqueOne([7,8,7,4,3,3]));