function SkipString(str,target){
    if(!str)
      return '';
    var ans = str.charAt(0);  
    if(str.startsWith(target))
     return SkipString(str.substring(target.length),target); 
    else
      return ans + SkipString(str.substring(1),target);
}

console.log(SkipString('tyrfyfAppff','App'));
