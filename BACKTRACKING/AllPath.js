function AllPath(Maze, r, c, rowSize, colSize, res) {
    if (r === rowSize && c === colSize) {
      console.log(res);
      return;
    }
    if (!Maze[r][c]) {
      return;
    }
  
    Maze[r][c] = false;
  
    if (r < rowSize) {
      AllPath(Maze, r + 1, c, rowSize, colSize, res + 'D ');
    }
    if (c < colSize) {
      AllPath(Maze, r, c + 1, rowSize, colSize, res + 'R ');
    }
    if (r > 0) {
      AllPath(Maze, r - 1, c, rowSize, colSize, res + 'U ');
    }
    if (c > 0) {
      AllPath(Maze, r, c - 1, rowSize, colSize, res + 'L ');
    }
  
    Maze[r][c] = true;
  }
  
  let maze = [[true, true, true], [true, true, true], [true, true, true]];
  AllPath(maze, 0, 0, maze.length - 1, maze[0].length - 1, '');