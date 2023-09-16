function Pattern(row,col){
    let count = 1;
    for(let r=0;r<row;r++){
        let mid = Math.floor(col/2) -r;
        let st =''
        for(let c=0;c<col;c++){
          if(c >= mid && c <= mid+2*r){
            st = st + '*';
          }
          else
            st = st+' ';
        }
        console.log(st);
        
    }
}

Pattern(6,12);