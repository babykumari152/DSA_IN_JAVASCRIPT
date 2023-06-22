function Coinchange(coin,sum,res,money){
    if(sum==0){
        res.push([...money])
        return;
    }
    if(sum<0){
        return;
    }
    for(i of coin){
        money.push(i);
        Coinchange(coin,sum-i,res,money)
        money.pop()
    }
    return;


}
let res=[];
let money = [];
Coinchange([1,2,5],10,res,money)
console.log(res);