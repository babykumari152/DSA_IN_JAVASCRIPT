function AllPath(Maze,r,c,rowSize,colSize,res){
    
    if(Maze[r][c] == false){
        return;
    }
    if(r==2 && c==2){
        console.log(res);
        return
    }
    Maze[r][c]=false;
    if(r<rowSize && Maze[r+1][c]!=false){
       
       AllPath(Maze,r+1,c,rowSize,colSize,res+'D ');
    }
    if(c<colSize && Maze[r][c+1]!=false){
    
       AllPath(Maze,r,c+1,rowSize,colSize,res+'R ');
    }
    if(r>0 && Maze[r-1][c]!=false){
        
       AllPath(Maze,r-1,c,rowSize,colSize,res+'L ')
    }
    if(c>0 && Maze[r][c-1]!=false){
        
       AllPath(Maze,r,c-1,rowSize,colSize,res+'U ');
    }
    Maze[r][c]=true
    return
};
AllPath([[1,1,1],[1,1,1],[1,1,1]],0,0,2,2,'');