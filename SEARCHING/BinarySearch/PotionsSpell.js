/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let result = [];
    potions.sort();
    for(let spell of spells){
        let left =0;
        let right=potions.length;
        let rel = success/spell;
        let mid=Math.floor((left+right)/2);
        while(left<right && left>=0 && right<potions.length){
            mid= Math.floor((left+right)/2);
            
            if(potions[mid]*spell > success){
                 right = mid-1;
                
            }
            else{
                left = mid;
            }
        }
        result.push(potions.length-left);
    }
    console.log(result);
    return result;
    
};

successfulPairs([5,1,3],[1,2,3,4,5],7);