// for sticky navgtion bar
window.addEventListener("scroll", () => {
    let navbarStk = document.getElementById("sticky-nav");
    let naavButton = document.getElementById("js-nav-button");
    if (window.pageYOffset >= 120) {
        navbarStk.classList.add("sticky-nv");
        naavButton.classList.add("new-nav-btn");
    } if (window.pageYOffset <= 120) {
        navbarStk.classList.remove("sticky-nv");
        naavButton.classList.remove("new-nav-btn");
    }
})
// for nav toggale
function toggleFanc() {
    const navgtionJs = document.getElementById("navjs");
    if (navgtionJs.className === "navbar-nav" && document.body.offsetWidth < 992) {
        navgtionJs.classList.remove("navbar-nav");
        navgtionJs.classList.add("new-navbar");
        document.body.style.overflowX = "none";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.body.style.overflow = "hidden" ;
    } else {
        navgtionJs.className = "navbar-nav";
        navgtionJs.classList.add("navbar-nav");
        document.body.style.backgroundColor = "white";
        document.body.style.overflow = "visible" ;
    }
}
// for card upswip animation 
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 360) {
        document.querySelector("#mycard1").classList.add("slideUp");
        document.querySelector("#mycard2").classList.add("slideUp");
        document.querySelector("#mycard3").classList.add("slideUp");
    }
    if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
        document.querySelector("#mycard4").classList.add("slideUp");
        document.querySelector("#mycard5").classList.add("slideUp");
        document.querySelector("#mycard6").classList.add("slideUp");
    }
})
/* for carosol */
let flag = 0;
function controler(x){
    flag = x ;
    slideshow(flag);
};

slideshow(flag);
function slideshow(){
    let sleid = document.getElementsByClassName("carousel-contein");
    for (let y of sleid) {
        y.style.display = "none";
    }
    sleid[flag].style.display = "block";
}
// -------  Project-section