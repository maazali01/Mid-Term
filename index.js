let cups = document.getElementById('cups');
let bottle = document.getElementById('bottle'); 
let smallCups = bottle.children[0];

cups.addEventListener("click", (e)=>{
    //Remove Color from small cups
    for(let x=0; x<cups.children.length;x++){
        cups.children[x].classList.remove('Full-color');
    }

    //Add colors to small cups
    for(let x = 0; x<cups.children.length; x++){
        cups.children[x].classList.add('Full-color');
        if(cups.children[x]==e.target){
            bottle.children[0].style.flex = 7-x;
            bottle.children[1].style.flex = x+1;
        if(x == 7){
            bottle.children[0].innerHTML = 'Bottle Filled';
            bottle.children[1].innerHTML = "100%";
        }
        else{
            bottle.children[0].innerHTML = smallCups;
            bottle.children[0].innerHTML = (2-(x+1)*.25) + 'L <br>Remained';
            bottle.children[1].innerHTML = ((x+1)*.25) + '  L <br>Filled';
    }
    return;
        }
}


})