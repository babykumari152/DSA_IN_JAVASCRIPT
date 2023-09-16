function Pattern(row,col){
    let mid = Math.floor(col/2);
    console.log(mid);
    for(let i=0;i<row;i++){
        let k = 1;
        let patrn ='';
        for(let j=0;j<col;j++){
            if(j>=mid-i && j<=mid+i){
                patrn = patrn + k;
                if(j<mid){
                    k = k+1;
                }
                else{
                    k = k-1;
                }
            }
            else{
                patrn += ' ';
            }
        }
        console.log(patrn);
    }
    
}
Pattern(5,9);