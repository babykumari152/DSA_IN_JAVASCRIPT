function pattern(row,col){
    let K = 0;
    let mid=Math.floor(row/2);
    for(let r=0;r<row;r++){
        let str ='';
        let num =0;
        let colMid = Math.floor((K+1)/2);
        
        for(let c=0;c<=K;c++){
        
        if(c>0&&c<K){
        str = str+num;
        }
        else
          str = str+'*';
        if(c<colMid)
           num = num+1;
         else
           num = num-1;
        }
        if(r<mid){
            K +=2;
        }
        else{
            K -=2;
        }
        console.log(str);
    }

}
pattern(7)