function Sort(Array,start,end){
    if(start>=end){
        return
    }
    let piviot = Partioning(Array,start,end);
    console.log(piviot)
    Sort(Array,piviot - 1);
    Sort(Array, piviot + 1, end);

}

function Partioning(Array,start,end){
    let countOfLessPiviot = 0;
    let piviot = Array[start];
    for(let i = start + 1; i < end; i++ ){
       if(Array[i]< piviot)
         countOfLessPiviot = countOfLessPiviot + 1;
    }
    let left = start;
    let right = end;
    console.log(countOfLessPiviot,piviot);
    while(left < countOfLessPiviot+start && right > countOfLessPiviot+start){
        if(Array[left] > piviot && Array[right] < piviot ){
            let temp = Array[left];
            Array[left] = Array[right]
            Array[right] = temp;
            left = left + 1;
            right = right - 1;
        }
        else if(Array[left] <= piviot){
            left = left + 1;
        }
        else if(Array[right] >= piviot){
            right = right - 1;
        }
    }

    return countOfLessPiviot + start;

}

let a = [4, 5,9,0,1,3,8];
Sort(a,0,a.length - 1);
console.log(a);