function MazeProblem(startRow, startCol, finalRow,finalCol,res){
    if(startRow == finalRow && startCol == finalCol){
       console.log(res);
       return
    }
    
    if(startRow < finalRow){
       MazeProblem(startRow+1, startCol, finalRow,finalCol, res+'Down ');
    }
    if(startCol < finalCol){
        MazeProblem(startRow , startCol+1,finalRow, finalCol, res+'Right ');
    }
    return;

}

console.log(MazeProblem(0,0,2,2,''));