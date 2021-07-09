/**
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
*/

document.addEventListener('DOMContentLoaded', () => {

/** Define Global Variables **/

    const sectionEls = document.querySelectorAll('section');
    const sections = Array.from(sectionEls);
    const ul = document.getElementById('navbar__list');
  

// Build Nav

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
    createNav();


    function getSection(section) {
        const menuLinksList = document.querySelectorAll('.menu__link');
        for (const menu of menuLinksList) {
            if (menu.innerText == section.getAttribute('data-nav')) {
                return menu;
            }
        }
        return undefined;
    }
    
// Active section when in viewport

    function inViewport(section) {
        let bounding = section.getBoundingClientRect();
        return (
            bounding.top +125 >=0 &&
            bounding.left +125 >= 0 &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );
    };
    inViewport ();


    function activeSection() {
        window.addEventListener('scroll', () => {
            sections.forEach((section) => {
                const menuItem = getSection(section);
                    if (inViewport(section)) {
                        menuItem.classList.add('menu__link--active');
                        section.classList.add('active-state');
                    }
                    else {
                        menuItem.classList.remove('menu__link--active');
                        section.classList.remove('active-state');
                    }
            });
        });
    }
    activeSection();
    

    // function activeViewport(){
    //     for(let section of sections){ 
    //       const item = section.getBoundingClientRect();
    //       const activeElement = document.getElementById(section.id);
    //       if (item.y <= 90 && item.bottom >=150){
    //         section.classList.add("active");
    //       }
    //       else {
    //         section.classList.remove("active");
    //       }
    //     }
    //   }
    //   document.addEventListener('scroll', activeViewport);

 // To Top Button 

    function createToTopButton() {
        const toTopButton = document.createElement('button');
        toTopButton.id = 'toTop';
        toTopButton.title = 'Go to top of the webpage';
        toTopButton.classList.add('toTop-button');
    }
    createToTopButton();


    function displayToTopButton() {
        const toTopBtn = document.getElementById('toTop');
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                toTopBtn.style.display = "block";
            } 
            else {
                toTopBtn.style.display = "none";
            }
        });
    }
    displayToTopButton();


    function clickToTopButton() {
        const toTopBtns = document.querySelector('#toTop');
        toTopBtns.addEventListener('click', () => {
            document.body.scrollTop = 0; 
            document.documentElement.scrollTop = 0; 
        });
    }
    clickToTopButton();


/* -- Section Collapsible -- */

    const coll = document.getElementsByClassName("collapsible");
    let i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        });
    }

// // Mobile Burger Nav - WIP
//     const navbarSlide = () => {
//     const burger = document.querySelector('.burger');
// // const navbarLinks = document.querySelectorAll('.navbar__menu li');
//     const navbarLinks = document.querySelectorAll('.navbar__list');


//     burger.addEventListener('click', () => {
//         //toggle
//         nav.classList.toggle('navbar__menu active');
//         //animate
//         navbar__list.forEach((link, index) => {
//         if (link.style.animation) {
//             link.style.animation = ""
//         } else {
//             link.style.animation = 'navbar__listFade 0.7s ease forwards ${index/7}s';
//         }
//         });
//     });
//     }
//     navbarSlide();
})