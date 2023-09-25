/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let candySum =0;
    for(let candy of candies){
        candySum += candy;
    }
    if(k>candySum){
        return 0;
    }
    else{
        candies.sort();
        let left =0;
        let right=candySum;
        result =0;
        while(left<=right){
            let mid=left+ Math.floor((right-left)/2)
            if(isPossible(candies,k,mid)){
                result = mid;
                left=mid+1;
            }
            else{
                right = mid-1;
            }
        }
        return result;
    }
    
};
function isPossible(candies,k,mid){
    let distributedX = 0;
    for(let candy of candies){
        distributedX +=Math.floor(candy/mid);
    }
    if(distributedX>=k){
        return true;
    }else{
        return false;
    }
}