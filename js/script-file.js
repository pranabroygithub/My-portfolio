
function button_animate(){
    
    var arrow =document.getElementById("button_arrow");
    arrow.style.right="10%"   
}
var timeid=0
function moveright()
{
    id= setTimeout(button_animate,500);
}
function moveleft(){
    var arrow =document.getElementById("button_arrow");
    arrow.style.right="20%"

    clearTimeout(id);
}

