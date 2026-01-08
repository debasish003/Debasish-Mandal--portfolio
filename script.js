const menuIconMenu = document.getElementById('iconForNav');
const navIconSwitch = document.getElementById('nav-icon');
const modeBtn = document.getElementById('mode');
const bodyClass = document.getElementById('main-body');
bodyClass.classList.add('mainDark-background-img');
console.log(bodyClass);
console.log(modeBtn.className);
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
modeBtn.addEventListener('click',(e)=>{
    if(modeBtn.className =='bi bi-brightness-low-fill'){
        modeBtn.classList.add('bi-moon-fill');
        modeBtn.classList.remove('bi-brightness-low-fill');
       bodyClass.classList.add('mainLight-background-img');
        bodyClass.classList.remove('mainDrark-background-img');
        
    }
    else{
        modeBtn.classList.add('bi-brightness-low-fill');
        modeBtn.classList.remove('bi-moon-fill');
         bodyClass.classList.add('mainDrark-background-img');
        bodyClass.classList.remove('mainLight-background-img');
    }
});

/* <i class="bi bi-moon-fill"></i>   moon icon*/