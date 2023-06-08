function SubsetString(subset,str){
    if(!str){
        let list = [];
        if(subset)
         list.push(subset);
        return list;  
    }
    let ch = str.charAt(0);
    let left = SubsetString(subset+ch,str.substring(1));
    let right = SubsetString(subset,str.substring(1));
    left = left.concat(right);
    return left;

}

console.log(SubsetString('','abc'));