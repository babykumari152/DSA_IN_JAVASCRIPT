function pattern(row =5,  col=17){
    let mid = Math.floor(col/2)+1;
    console.log(mid);
    for(let i=1;i<=row;i++){
        let str = '';
        for(let j=1;j<=col;j++){
            if(j>mid-i && j<mid+i && (i%2!=0 && j%2!==0 || i%2==0 && j%2==0))
              str = str + i;            
            else{
                str = str + '*';
            }
        }
        console.log(str);
    }
}
pattern();