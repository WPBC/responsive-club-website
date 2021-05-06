var menuToggle = document.getElementById('toggle');
var mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    if(mainNav.style.display == "block") {
        mainNav.style.display = "none";
    } else {
        mainNav.style.display = "block";
    }
});