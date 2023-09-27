/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function(str1, str2) {
    console.log(str1)
    let str ='';
    let str1len = str1.length;
    let str2len = str2.length;
    let comStr = str1len>str2len?str2:str1;
    let comStrLen = comStr.length;
    let ix =comStrLen;
    str = comStr;
    while(ix>0){
        if(isSubStrng(str1,str) && isSubStrng(str2,str)){
            return str;
        }
        
        str = str.substring(0,ix);
        ix -=1;
        


    }
    return "";
    
};
function isSubStrng(strmain,str){
    if(str==''){
        return false;
    }
    let itx = strmain.length/str.length;
    let res='';
    for(let i=0;i<itx;i++){
        res +=str;
    }
    return res==strmain;
}
console.log(gcdOfStrings("ABCABCABC","ABCABC"))