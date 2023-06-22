const coin = [1,2,5]
const sum = 10;

function CoinChange(coin,sum){
    if(sum==0){
        return 0;
    }
    if(sum<0){
        return Infinity;
    }
    let maxSum = Infinity;
    for(i of coin){
        let res=CoinChange(coin,sum-i);
        maxSum = Math.min(maxSum,res+1);
    }
    return maxSum;
}

console.log(CoinChange(coin,18));