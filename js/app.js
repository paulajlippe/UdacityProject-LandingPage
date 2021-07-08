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


	function isInViewport(elem) {
		let bounding = elem.getBoundingClientRect();
		return (
			bounding.top +125 >=0 &&
			bounding.left +125 >= 0 &&
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
			bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
			);
	}


/**  Populate Nav Bar */

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


/** Create Scroll To Top Button */

	function createToTopButton() {
		const toTopButton = document.createElement('button');
		toTopButton.id = 'toTop';
		toTopButton.title = 'Go to top of the webpage';
        toTopButton.classList.add('toTop-button');
	}
    createToTopButton();


/** Scroll Active State Function */

	function activeSection() {
		window.addEventListener('scroll', () => {
			sectionsList.forEach((section) => {
				const menuItem = getCorrespondingMenu(section);
                    if (isInViewport(section)) {
                        menuItem.classList.add('menu__link--active');
                        section.classList.add('section--active');
                    }
                    else {
                        menuItem.classList.remove('menu__link--active');
                        section.classList.remove('section--active');
                    }
			});
		});
	}
    activeSection();


/** To Top Function */

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
		const toTopBtn = document.getElementById('toTop');
		toTopBtn.addEventListener('click', () => {
			document.body.scrollTop = 0; 
			document.documentElement.scrollTop = 0; 
		});
	}
    clickToTopButton();


/** Toogle Burger Nav */
    function navbarToogle () {
        const burger = document.querySelector('.burger');    
        burger.addEventListener('click', () => {
            //toggle
            navbarParent.classList.toggle('navbar__menu--active');
            //animate
            navbar__list.forEach (link => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = 'navbar__listFade 0.7s ease forwards ${index/7}s';
            }
            });
        });
    }
    navbarToogle();

});