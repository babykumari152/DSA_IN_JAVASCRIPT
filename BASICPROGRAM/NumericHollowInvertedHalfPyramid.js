function Pyramid(row,col){

    for(let r=0;r<row;r++){
        patrn = '';
        for(let c=r+1;c<=col;c++){
            if(r==0||c==r+1||c==col)
             patrn = patrn + c;
            else
             patrn = patrn + ' ';
        }
        console.log(patrn);
    }

}
Pyramid(5,5);