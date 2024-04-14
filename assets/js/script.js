// NAV COLOR // 
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var startSection = document.querySelector('#start').offsetTop;
        var navbar = document.querySelector('.navbar');

        if (scrollPosition > startSection) {
            navbar.classList.add('navbar-blue');
            navbar.classList.remove('navbar-white');
        } else {
            navbar.classList.add('navbar-white');
            navbar.classList.remove('navbar-blue');
        }
        
// NAV TRANSPARENT // 
        if (scrollPosition === 0) {
            navbar.classList.remove('navbar-blue');
            navbar.classList.remove('navbar-white');
        }
    });
});