// Side Nav
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');;
const sidenav =  document.getElementById('sidenav');
    
openMenu.addEventListener('click', openSidenav);
closeMenu.addEventListener('click', closeSidenav);
      
function openSidenav(){
 sidenav.style.display = 'flex'; 
}
    
function closeSidenav(){
 sidenav.style.display = 'none'; 
} 
/*---------------------------------------------------------*/      
