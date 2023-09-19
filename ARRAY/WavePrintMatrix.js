function Print(Matrix){
    let rowLen =Matrix.length;
    let colLen=Matrix[0].length;
    for(let col=0;col<colLen;col++){
        for(let row=0;row<rowLen;row++){
            if(col%2==0)
              console.log(Matrix[row][col])
            else{
                let r = rowLen - row - 1;
              console.log(Matrix[r][col]);
            }
        }
    }
}

let A = [[1,4,7],[2,5,8],[3,6,9]];

Print(A);