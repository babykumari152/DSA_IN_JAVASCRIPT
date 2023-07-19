function solve24(str,ans,eq){
    if(ans == 24){
        console.log(eq);
        return;
    }
    if(!str){
        return;
    }
    let num = str.charAt(0);
    num = Number(num)
    str = str.slice(1);
    solve24(str,ans*num,eq+'*'+num);
    solve24(str,ans+num,eq+'+'+num);
    solve24(str,ans-num,eq+'-'+num);
    return;
}
let strng = '1234';
solve24(strng.slice(1),Number(strng.charAt(0)),strng.charAt(0));
