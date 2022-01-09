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
// for slide up sroll 
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};
const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};
const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};
const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};
const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
        displayScrollElement(el);
    } else if (elementOutofView(el)) {
        hideScrollElement(el)
    }
    })
}
window.addEventListener("scroll", () => { 
    handleScrollAnimation();
});
/* end sroll up */
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
function displayFunc1() {
    document.getElementById("btnon1").classList.toggle("Project-link")
}
function displayFunc2() {
    document.getElementById("btnon2").classList.toggle("Project-link")
}
function displayFunc3() {
    document.getElementById("btnon3").classList.toggle("Project-link")
}