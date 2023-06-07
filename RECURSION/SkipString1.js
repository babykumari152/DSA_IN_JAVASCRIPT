function Substring(str,ans,st,end,ch){
    if(st<end){
    if(str.charAt(st)!==ch)
       Substring(str,(ans + str.charAt(st)),st+1,end,ch);
    else
       Substring(str,ans,st+1,end,ch)   
    }
    else
      return   
    console.log(ans);  
}

Substring('abcca','',0,5,'a');