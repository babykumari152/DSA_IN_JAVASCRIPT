/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left =0;
    let right=nums.length;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(mid>0 && mid<nums.length){
        if(nums[mid]>nums[mid-1] && nums[mid]<nums[mid+1]){
            return mid+1;
        }
        else if(nums[mid]<nums[mid+1]){
            left=mid-1;
        }
        else{
            right=mid+1;
        }
        }
        else if(mid==0 && nums[mid]>nums[mid+1]){
            return mid+1;
        }
        else{
            return mid+1;
        }
    }
    
};
console.log(findPeakElement([1,2,1,3,5,6,4]));