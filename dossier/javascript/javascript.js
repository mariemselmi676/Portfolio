/*fonction de button*/
function btnsubmit() {
    alert("Welcome to my website!\n Enjoy ☺️");
}
/*afficher de liste*/
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#menu-icon');
  const nav  = document.querySelector('.navbar');
  if(menu && nav){
    menu.addEventListener('click', () => nav.classList.toggle('show'));
  }
});


