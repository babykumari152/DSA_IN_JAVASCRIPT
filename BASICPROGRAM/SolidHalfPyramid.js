function Pattern(row,col){
    let mid = Math.floor(row/2);
    let k = 1;
    for(let r = 1; r<=row;r++){
        let str='';
        for(let c=1;c<=k;c++){
            str = str +'*';
        }
        if(r<mid){
            k = k+1;
        }
        else{
            k=k-1;
        }
        console.log(str);
    }
}

Pattern(13);