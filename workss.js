//onclick
let icon = document.getElementById('ion');
let home = document.getElementById('home');
icon.onclick = function(){

icon.classList.toggle("open");

home.style.display = "block";

}
let menu = document.querySelector('.fa-bars')
let list = document.querySelector('.list')
menu.onclick = () => {
    menu.classList.toggle('fa-xmark')
    list.classList.toggle('more')
};