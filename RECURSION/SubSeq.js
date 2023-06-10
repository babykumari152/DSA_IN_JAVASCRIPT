function SubSeq(str,res){
  if(!str){
    console.log(res);
    return
  }
  let ch = str.charAt(0);
  SubSeq(str.substring(1),res+ch);
  SubSeq(str.substring(1),res);
  return
}

console.log(SubSeq('abc',''));