function Pattern(row,col){

    for(let r=1;r<=row;r++){
        let pattern ='';
        for(let c=1;c<=col;c++){
           if(r==row || c==1 || c==col-(row-r)){
            pattern = pattern+c
           }
           else
             pattern = pattern+' ';
        }
        console.log(pattern);
    }
}
Pattern(5,5);