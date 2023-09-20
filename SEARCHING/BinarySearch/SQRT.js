function SQRT(num){
    let left =0;
    let right = num/2;
    let result = -1;
    while(left<right){
        let mid =   (left+right)/2;
        if(mid * mid==num){
            console.log(result);
            result = num;
            return;

        }
        else if(mid*mid < num){
            result = mid;
            left = mid +1;
        }
        else{
            result = mid -1;
        }
    }
    console.log(result);
}
SQRT(15)