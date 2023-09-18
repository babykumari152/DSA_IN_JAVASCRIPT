findMajority = (array) =>{
  let count = 0;
  let candidate = null;


for(let item of array){
   if(count == 0){
    candidate = item;
   }
   count += candidate == item ? 1 : -1;
}
count =0;
for(let item of array){
  count += candidate == item ? 1 : 0;  
}
return count > array.length/2 ? true : false;
}

console.log(findMajority([1, 2, 3, 2, 2, 4, 2]))