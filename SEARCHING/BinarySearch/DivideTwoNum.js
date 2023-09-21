function DivideTwoNum(num1,num2){
    let left = 0;
    let  epsilon = 1e-9
    let right = Infinity
    while(left<right){
        let mid =  left+(right -left)/2;
        if(num1*mid<epsilon){
            console.log(mid);
            return
        }
        else if(num1*mid>num2){
            right=mid;
        }
        else{
            left = mid;
        }
    }
}
DivideTwoNum(4,32);