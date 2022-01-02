// for sticky navgtion bar
window.addEventListener("scroll", () => {
    let navbarStk = document.getElementById("sticky-nav");
    if (window.pageYOffset >= 120) {
        navbarStk.classList.add("sticky-nv");
    } if (window.pageYOffset <= 120) {
        navbarStk.classList.remove("sticky-nv");
    }
})
// for nav toggale
function toggleFanc() {
    const navgtionJs = document.getElementById("navjs");
    if (navgtionJs.className === "navbar-nav me-lg-5") {
        navgtionJs.style.display = "block";
        console.log(215465);
    } else {
        navgtionJs.className = "navbar-nav me-lg-5";
    }
}
// for card upswip animation 
window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 360 || document.documentElement.scrollTop > 360) {
        document.querySelector("#mycard1").classList.add("slideUp");
        document.querySelector("#mycard2").classList.add("slideUp");
        document.querySelector("#mycard3").classList.add("slideUp");
        // document.querySelector("#mycard4").classList.add("slideUp");
        // document.querySelector("#mycard5").classList.add("slideUp");
        // document.querySelector("#mycard6").classList.add("slideUp");
    }
    if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
        // document.querySelector("#mycard1").classList.add("slideUp");
        // document.querySelector("#mycard2").classList.add("slideUp");
        // document.querySelector("#mycard3").classList.add("slideUp");
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