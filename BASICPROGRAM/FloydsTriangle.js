
function pattern(){
let counter = 1;
let str = '';
for(let i =0;i<6;i++){
    
   for(let j=0;j<=i;j++){
      str = str +' '+ counter;
      counter +=1;
   }
   str = str +'\n';
}
return str
}

console.log(pattern())