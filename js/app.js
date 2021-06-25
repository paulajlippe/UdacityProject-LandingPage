/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/** Define Global Variables **/

const sections = document.getElementsByTagName('section');
const nav = document.getElementsByTagName('navbar__menu');

/** Begin Main Functions **/

// BUILD THE NAVBAR
// Navigation is built dynamically as an unordered list.
// Make sure the navbar be built dynamically using loops & DOM manipulation techniques like `createElement()` & `appendChild()`

var ul = document.getElementById('navbar__list');

function createNav() {
    for(let i = 0; i < sections.length; i ++){
        const navLi = document.createElement('li');
        const navLiLink = document.createElement ('a');
        navLiLink.textContent = sections[i].id;
        navLiLink.classList.add("menu__link");
        navLi.appendChild(navLiLink);
        ul.appendChild(navLi)
            }
        }
createNav()

// looping through all the sections
// create a new list element each run through the loop called 'tabs'
// set the innerHTML of that element equal to the data attribute of the sections HTMLCollection. Double check the value there! You just want the individual item not the whole sections collection
// append the li 'tabs' to the nav

// Add class 'active' to section when near top of viewport

function sectionActive() {
    const active = sectionActive;
    const scrollHeight = window.pageYOffset;

    for(let i = 0; i <= sectionActive.length; i++) {
        tabs.innerHTML = sections[i].getAttribute('data-nav');
        nav.appendChild(tab);
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBot = section.getBoundingClientRect().bottom;
    }
};

window.addEventListener('click', function(){
    sectionActive();
});

// function setActive(){
//     for(navLiLink of sections){
//         if(navchecksize(navLiLink)){
//             // use the same technique to 
//             // add the class to the navbar item
//             navLiLink.classList.add("active__class");
//         }else{        
//             navLiLink.classList.remove("active__class");
//         }
//     }
// };


// Scroll to anchor ID using scrollTO event
function scrollToAnchor(event) {
    event.preventDefault();
  
    let section = document.querySelector(`#${event.target.dataset.section_id}`);
    window.scrollTo({
        top: section.offsetTop, // using section's left and top coordinated
        left: section.offsetLeft,
        behavior: 'smooth'
    });
}




  /* HIGHLIGHTING NAV IN VIEW */

// Scroll to anchor ID using scrollTO event 

// function scroll_to_anchor(section_id){
//     var tag = $("#"+section_id);
//     $('html,body').animate({scrollTop: tag.offset().top},'smooth');
// };




/** End Main Functions * Begin Events **/

// Build menu 
// Scroll to section on link click
// Set sections as active

// Make sections colaspable - WIP
const col = document.getElementsByTagName("collapsible");
var i;
for (i = 0; i < col.length; i++) {
    col[i].addEventListener("click", function() {
    this.classList.toggle("sectionActive");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    content.style.display = "none";
    } else {
    content.style.display = "block";
    }
    });
    }

// Mobile Burger Nav - WIP
const navbarSlide = () => {
const burger = document.querySelector('.burger');
// const navbarLinks = document.querySelectorAll('.navbar__menu li');
const navbarLinks = document.querySelectorAll('.navbar__list');


burger.addEventListener('click', () => {
    //toggle
    nav.classList.toggle('navbar__menu active');
    //animate
    navbar__list.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = ""
    } else {
        link.style.animation = 'navbar__listFade 0.7s ease forwards ${index/7}s';
    }
    });
});
}
navbarSlide();