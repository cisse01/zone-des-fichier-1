/* partie du code js qui permet de gerer les animations et d'autres detailles du page web poour ça dynamisation*/
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var f9 = document.getElementById("f9")

function change_color(){
    this.style.color="goldenrod"
}
function change_color_2(){
    this.style.color="gold"
}

a1.addEventListener('mouseover',change_color)
a2.addEventListener('mouseover',change_color)
f9.addEventListener('mouseover',change_color)

a1.addEventListener('mouseout',change_color_2)
a2.addEventListener('mouseout',change_color_2)
f9.addEventListener('mouseout',change_color_2)


/*Partie 2  du code js 

var phone =document.querySelector('select').options.selectedIndex
var phone2 = document.getElementById("f7")

if(phone==0)
{
    phone2.setAttribute("pattern","[0-9]{3}-[0-9]{3}-[0-9]{4}")
};
*/
