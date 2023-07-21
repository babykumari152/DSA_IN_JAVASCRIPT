function minStareStep(step,cost,dp=[]){
    if(step == 0){
        return cost[0];
    }
    if(step == 1){
        return cost[1];
    }
    if(dp[step]){
        return dp[step]
    }
    dp[step]= cost[step] + min(minStareStep(step-1,cost,dp),minStareStep(step-2,cost,dp))
    return dp[step]
}

let costArr = [3,5,6,7];
min(minStareStep(costArr.length-1,costArr),minStareStep(costArr.length-2,costArr));