let maze = [
    ['S', '.', '.', '.', '.', '.', '.'],
    ['.', 'X', '.', 'X', 'X', '.', '.'],
    ['.', 'X', '.', '.', '.', '.', '.'],
    ['.', '.', '.', 'X', 'X', '.', '.'],
    ['.', '.', 'X', '.', '.', '.', '.'],
    ['.', '.', '.', '.', 'X', 'X', '.'],
    ['.', 'X', 'X', 'X', '.', '.', 'G']
  ];
function FindPath(maze,mid,row,col,rowSize,colSize,Path){
    if(row==rowSize && col==colSize){
        console.log(Path)
        return;
    }
    if(!maze[row][col] || maze[row][col]=='X'){
        return;
    }
    maze[row][col] = false;
    if(row<rowSize){
        
        FindPath(maze,mid,row+1,col,rowSize,colSize,Path+'D ');
    }
    
    if(row<colSize){
        
        FindPath(maze,mid,row,col+1,rowSize,colSize,Path+'R ');
    }
    
    if(col>0){
        FindPath(maze,mid,row,col-1,rowSize,colSize,Path+'L ');
    }
    
    if(row>0){

        FindPath(maze,mid,row-1,col,rowSize,colSize,Path+'U ');
    }
    //console.log(mid)
    maze[row][col] = mid[row][col];
}  
let mid = JSON.parse(JSON.stringify(maze))
FindPath(maze,mid,0,0,maze.length-1,maze[0].length-1,'');