function Permutation(processed,unProcessed,ans ){ 
    if(!unProcessed){
      return ans.push(processed);
    }
    var ch = unProcessed.charAt(0);
    for(let i = 0; i <= processed.length; i++){
        let f = processed.substring(0,i);
        let s = processed.substring(i,processed.length);
        
       Permutation(f+ch+s,unProcessed.substring(1),ans);
    }  
    return ans;
}

function Permutation1(str,res){
    if(!str){
        console.log(res);
    }
    for(let i =0;i<str.length;i++){
        let first = str.charAt(i);
        Permutation1(str.substring(0,i)+str.substring(i+1),res+first);
    }
}

let ans =[];
console.log(Permutation('','abc',ans));
console.log(Permutation1('abc',''));