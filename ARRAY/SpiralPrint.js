function Print(Matrix){
    let startRow = 0;
    let startCol =0;
    let endRow = Matrix.length;
    let endCol = Matrix[0].length;
    while(startRow < endRow && startCol < endCol){
        for(let i = startCol; i<endCol;i++){
            console.log(Matrix[startRow][i]);
        }
        startRow = startRow+1;
        for(let i=startRow;i<endRow;i++){
            console.log(Matrix[i][endCol-1]);
        }
        endCol -=1;
        for(let i=endCol-1;i>=startCol;i--){
            console.log(Matrix[endRow-1][i]);
        }
        endRow -=1;
        for(let i =endRow-1;i>=startRow;i--){
            console.log(Matrix[i][startCol]);
        }
        startCol +=1;
        
    }
}
A = [[1,2,3],[4,5,6],[7,8,9]];
Print(A);