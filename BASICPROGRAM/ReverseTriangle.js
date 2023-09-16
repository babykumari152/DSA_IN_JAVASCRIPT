function Pattern(row, col) {
    for (let r = 0; r < row; r++) {
        let st = '';
        for (let c = 0; c < col; c++) {
            if (c >= r && c < col - r || r  == row - 1 && c >= r && c < col - r+1) {
                st += '*';
            } else {
                st += ' ';
            }
        }
        console.log(st);
    }
}

Pattern(7, 12);
