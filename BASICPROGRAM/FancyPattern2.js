function Pattern(row,col){
    let mid = Math.floor((row+1)/2);
    let k =0;
    let counter = 1;
    for(let i =0;i<row;i++){
        let str = '';
        for(let j=0;j<=k;j++){
            if(j%2==0){
             str = str + counter;
             counter = counter +1;
            }
            else
              str = str +'*';
        }
        console.log(str);
        if(r<mid){
            k=k+1
        }
        else{
            k=k-1;
        }
    }
}
Pattern