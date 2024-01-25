`use strict`

document.addEventListener("DOMContentLoaded", function() {
    const mobileNavButton = document.getElementById('mobile__nav-icon');
    const mobileNavClose = document.getElementById('mobile__nav-close');
    const mobileNav = document.getElementById('menu');

    mobileNavButton.addEventListener("click", function(){
        // mobileNav.style.display = 'flex';
        mobileNav.style.right = '0';
        
    });

    mobileNavClose.addEventListener("click", function(){
        // mobileNav.style.display = 'none';
        mobileNav.style.right = '-16rem';
    })
    
});