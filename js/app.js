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

const section = document.getElementById('section');
const nav = document.getElementsByTagName('navbar__menu');
const navLinks = document.getElementById('navbar__list');

/** Begin Main Functions **/


// BUILD THE NAVBAR
//Navigation is built dynamically as an unordered list.
//Make sure the navbar be built dynamically using loops & DOM manipulation techniques like `createElement()` & `appendChild()`

// 1 - Fetch the list of all sections
// 2 - Fetch the .nav-list unordered list
// 3 - Run a loop over list of sections
// i. Generate a new <li> for each section
// ii. Insert it inside the .nav-list

var ul = document.getElementById('navbar__list');

function createNav() {
    for(let i = 0.; i < allSection.length; i ++){
        const navLi = document.createElement('li');
        const navLiLink = document.createElement ('a');
        navLi.innerText = 'section id' + i;
            navLi.appendChild(navLiLinks);
            }
        }

// looping through all the sections
// create a new list element each run through the loop called 'tabs'
// set the innerHTML of that element equal to the data attribute of the sections HTMLCollection. Double check the value there! You just want the individual item not the whole sections collection
// append the li 'tabs' to the nav



// Add class 'active' to section when near top of viewport

function sectionActive() {
    const scrollHeight = window.pageYOffset;

    for(let i = 1; i <= section.length; i++) {
        const tab = document.createElement('li');
        tabs.innerHTML = sections[i].getAttribute('data-nav');
        nav.appendChild(tab);
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBot = section.getBoundingClientRect().bottom;
    }
};

window.addEventListener('scroll', function(){
    sectionActive();
});

// Scroll to anchor ID using scrollTO event

/** End Main Functions * Begin Events **/

// Build menu 
// Scroll to section on link click
// Set sections as active

// Make sections colaspable
const col = document.getElementsByClassName("collapsible");
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