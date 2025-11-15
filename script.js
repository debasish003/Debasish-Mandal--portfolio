const menuIconMenu = document.getElementById('iconForNav');
const navIconSwitch = document.getElementById('nav-icon');
console.log(menuIconMenu.className);
    menuIconMenu.addEventListener('click',()=>{
        if(menuIconMenu.className== 'bi bi-list'){
    // menuIcon.innerHTML("X");
    menuIconMenu.classList.add('fa-solid');
    menuIconMenu.classList.add('fa-xmark');
    menuIconMenu.classList.remove('bi');
    menuIconMenu.classList.remove('bi-list');
    navIconSwitch.style.visibility = 'visible';
    console.log(menuIconMenu.className);
        }
       else{
    // menuIcon.innerHTML("X");
    menuIconMenu.classList.add('bi');
    menuIconMenu.classList.add('bi-list');
    menuIconMenu.classList.remove('fa-solid');
    menuIconMenu.classList.remove('fa-xmark');
    navIconSwitch.style.visibility = 'hidden';
       }
});

console.log(menuIconMenu.className);
//<i class="fa-solid fa-xmark"></i> cross icon