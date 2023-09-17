function pattern(){
    let count
    for(let row=1;row<6;row++){
        let count =1;
        let str = '';
        for(let col=1;col<=row;col++){
           str = str + ' '+count;
           count = count * (row-col)/col;
        }
        console.log(str);
    }
}
pattern()