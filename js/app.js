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
            var scroll = document.getElementById("sections");
            scroll.addEventListener('click', navLiLink => {
                navLiLink.preventDefault();
                sections.scrollIntoView({ behavior: "smooth" })
                });  

    }; 
           
createNav()


// looping through all the sections
// create a new list element each run through the loop called 'tabs'
// set the innerHTML of that element equal to the data attribute of the sections HTMLCollection. Double check the value there! You just want the individual item not the whole sections collection
// append the li 'tabs' to the nav

    const tabLinks = new Array();
    const contentDivs = new Array();

    function init() {
        // Grab the tab links and content divs from the page
        var tabListItems = document.getElementById('tabs').childNodes;
        for ( var i = 0; i < tabListItems.length; i++ ) {
          if (tabListItems[i].nodeName == "li" ) {
            var tabLink = getFirstChildWithTagName(tabListItems[i], 'a');
            var id = getHash( tabLink.getAttribute('href') );
            tabLinks[id] = tabLink;
            contentDivs[id] = document.getElementById(id);
          }
        }
    }


// Add class 'active' to section when near top of viewport

function setActive(){
    for(tabLink of contentDivs){
        if(navchecksize(tabLink)){
            // use the same technique to 
            // add the class to the navbar item
            tabLink.classList.add("active__class");
        }else{        
            tabLink.classList.remove("active__class");
        }
    }
};


// // Go to Top Function - WIP
// function createToTopButton() {
//     //create new buttom element
//     const topButton = document.createElement('button');

//     // add attributes to the button
//     topButton.id = 'toTopBtn';
//     topButton.title = 'Go to top of webpage';
//     topButton.innerText = 'Top';
//     // add classes
//     topButton.classList.add('btn');
//     topButton.classList.add('btn-scrollTop');

//     //add button to the webpage
//     document.body.appendChild(topButton);
// }


/** End Main Functions * Begin Events **/



// Make sections colaspable - WIP
// const col = document.getElementsByTagName("collapsible");
// var i;
// for (i = 0; i < col.length; i++) {
//     col[i].addEventListener("click", function() {
//     this.classList.toggle("sectionActive");
//     var content = this.nextElementSibling;
//     if (content.style.display === "block") {
//     content.style.display = "none";
//     } else {
//     content.style.display = "block";
//     }
//     });
//     }

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