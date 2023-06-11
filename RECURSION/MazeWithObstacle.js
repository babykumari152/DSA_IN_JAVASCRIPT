function MazeWithObstacle(startX,startY,destX,destY,obstX,obstY,res){
    if(startX == destX && startY == destY){
        console.log(res)
        return 
    }
    else if(startX == obstX && startY == obstY){
        return
    }
    else{
        if(startX <= destX){
            MazeWithObstacle(startX+1,startY,destX,destY,obstX,obstY,res+'Down ');
        }
        if(startY <= destY){
            MazeWithObstacle(startX,startY+1,destX,destY,obstX,obstY,res+'Right ');
        }

    }
    return
      
}

console.log(MazeWithObstacle(0,0,2,2,1,1,''));