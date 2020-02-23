//variables 
const slids = document.querySelectorAll('.slider-container');
const dots = [...document.querySelectorAll('.dot')];
const btnMenu = document.querySelector('.hamburger');
const menu = document.querySelector('.main-navigation');
const sectionText = document.querySelector('.section-container.text-section');
const hiddenMenu = document.querySelector('.hidden-menu');
const offTop = sectionText.offsetTop;
let number = 0;
let index;
const time = 5000;

//function hide all slides
const hideSlide = function() {
    slids.forEach(slide => slide.style.display = "none");  
}

//hide all slides
hideSlide();

//show first slide
slids[0].style.display = "block";



//function change active dot
const changeDot = function() {  
    dots.forEach(dot => dot.classList.remove('active'));
    dots[number].classList.add('active');
}

//function changing slid
const changeSlide = function() {
    hideSlide();
    number++;
    if(number === slids.length) {
        number = 0;
    } 
    slids[number].style.display = "block";
    changeDot();
}

index = setInterval(changeSlide, time);

//change dot after click
const dotAfterClick = function(){
    number = dots.indexOf(event.target);
    slids.forEach(slide => slide.style.display = "none");
    clearInterval(index);
    slids[number].style.display = "block";
    changeDot();
   index = setInterval(changeSlide,time);
};

dots.forEach(dot => dot.addEventListener('click', dotAfterClick));

//show main-navigation
const showMenu = function() {
    menu.classList.toggle('activeMenu');
    btnMenu.classList.toggle('focus');
};

btnMenu.addEventListener('click', showMenu);

//show and hide hidden navigation
const showHideNav = function() {
    if(this.scrollY > offTop) {
         hiddenMenu.classList.add('activeMenu');
    } else {
         hiddenMenu.classList.remove('activeMenu');
    }   
 };

window.addEventListener('scroll', showHideNav);