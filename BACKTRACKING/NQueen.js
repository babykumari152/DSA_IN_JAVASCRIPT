function NQueen(board,k){
    console.log(k)
    if(k==board[0].length - 1){
        console.log(board)
        return
    }
    for(var i = 0;i<board[0].length;i++){
        //console.log(i,k,isPossible(board,i,k,n));
        if(isPossible(board,i,k,)){
           board[k][i] = true;
           NQueen(board,k+1);
           board[k][i] = false;
        }
        else{
            NQueen(board,k+1);
        }
    
    }

}
function isPossible(board,col,row){
    //col check
    for(var i=0;i<row;i++){
        if(board[i][col]==true)
          return false;
    }
    // for(var i =0;i<n;i++){
    //     if(board[row][i]==true)
    //       return false
    // }
    //diagonal left
    for(var i=0;i< Math.min(row,col);i++){
        if(board[row-i][col-i]==true)
          return false;

    }
    for(var i =0; i<Math.min(row,board[0].length-col-1);i++){
        if(board[row-i][col+i]==true)
          return false
    }
    return true;

}

var board = new Array(4).fill(new Array(4).fill(false))
NQueen(board,0)