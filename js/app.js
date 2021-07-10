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

document.addEventListener('DOMContentLoaded', () => {

/**  Define Global Variables */

const sectionsList = document.querySelectorAll('section');
const navbarParent = document.querySelector('#navbar__list');
let navbar__list = Array.from(navbarParent.children);

/** Helper Functions */

    function getCorrespondingMenu(section) {
        const menuLinksList = document.querySelectorAll('.menu__link');
        for (const menu of menuLinksList) {
            if (menu.innerText == section.getAttribute('data-nav')) {
                return menu;
            }
        }
        return undefined;
    }

// Populate Nav Bar 

	function addNavItems() {
		const navFragment = document.createDocumentFragment();
		sectionsList.forEach((sectElement) => {
			const navListItem = document.createElement('li');
                navListItem.innerText = sectElement.getAttribute('data-nav');
                navListItem.classList.add('menu__link');
                navListItem.addEventListener('click', () => {
                    sectElement.scrollIntoView({behavior: "smooth"});
                });
                navFragment.appendChild(navListItem);
		});
		navbarParent.appendChild(navFragment);
	}
    addNavItems();

// Create Scroll To Top Button 

	function createToTopButton() {
		const toTopButton = document.createElement('button');
            toTopButton.id = 'toTop';
            toTopButton.title = 'Go to top of the webpage';
            toTopButton.classList.add('toTop-button');
	}
    createToTopButton();

// Scroll Active State Function

    function activeViewport(){
        for(let section of sectionsList){ 
        const item = section.getBoundingClientRect();
        const activeElement = document.getElementById(section.id);
        if (item.y <= 90 && item.bottom >=150){
            section.classList.add("active-state");
        }
        else {
            section.classList.remove("active-state");
        }
        }
    }
    document.addEventListener('scroll', activeViewport);
    
// To Top Function 

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
  
// Make Collapsible

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

});