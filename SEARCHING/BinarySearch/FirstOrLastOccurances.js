console.log('hi')
function FirstOccurance(Array,el){
    let left =0;
    let right = Array.length -1;
    let result = -1;
    while(left<right && left >=0){
        let mid = Math.floor(left + (right - left) /2);
        if(Array[mid]==el){
            result = mid;
            right = mid -1;
        }
        else if(Array[mid]<el){
            left = mid +1;
        }
        else
           right = mid -1;

    }
    console.log(result);
}


function LastOccurance(Array,el){
    let left =0;
    let right = Array.length -1;
    let result = -1;
    while(left<=right && left >=0){
        mid = Math.floor(left + (right - left) /2);
        if(Array[mid]==el){
            result = mid;
            left = mid +1;
        }
        else if(Array[mid]<el){
            left = mid +1;
        }
        else
           right = mid -1;

    }
    console.log(result);
}

let A =  [2, 5, 5, 5, 6, 6, 8, 9, 9, 9];
FirstOccurance(A,5);
LastOccurance(A,5);
