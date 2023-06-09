function Permutation(processed,unProcessed ){
    var ans = [];

    if(!unProcessed)
      return ans.push(processed);
    var ch = unProcessed.charAt(0);
    for(let i = 0; i <= processed.length; i++){
        let f = processed.substring(0,i);
        let s = processed.substring(i,processed.length);
        //console.log(f,s,ch)
       return Permutation(f+ch+s,unProcessed);
    }  
    return ans;
}


console.log(Permutation('','abc'));