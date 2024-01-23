function changeColor( color1,color2 ) {
    this.style.color = color1;
    this.style.backgroundColor = color2;
    }
(()=>{
    console.log(document);
    let el=document.getElementById('main');
    console.log(el);
    el['onclick']=()=>{
        alert('clicked');
    }
    //changeColor.bind( el);
    el.bind(changeColor);
    changeColor("blue",'red')

})();