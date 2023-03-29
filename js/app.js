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






document.addEventListener('DOMContentLoaded', buildNavigation)

// console.log(sections)
// sections = ['section1','section2','section3']


/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let navBarList = undefined 
let sections = undefined
let sectionsList = undefined


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/*This function appends the li tag to navbar */

function appendContent(list){
    let content = ''
    const fragment = document.createDocumentFragment();

    for(section of list){
        // console.log(section.id)
        const anchor = document.createElement('a')
        anchor.setAttribute('data-href',section.id)
        anchor.innerText = section.dataset.nav
        anchor.classList.add('menu__link')
        const listTag = document.createElement('li')
        listTag.appendChild(anchor)
        console.log(listTag)
       
        fragment.appendChild(listTag)
   
    }
    // console.log(fragment)
    navBarList.appendChild(fragment)
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

/* This funtion builds the navigation*/
function buildNavigation(){
    navBarList = document.getElementById("navbar__list")
    navBarList.addEventListener('click', onNavClick)
    sections = document.querySelectorAll('section')
    appendContent(sections)
   
}

/* This function sets the active state for navs*/
function manageActiveSectionState(){
   
    // Add class 'active' to section when it is near top of viewport
    for (section of sections) {
      const box = section.getBoundingClientRect();
      const nav = document.querySelector(`a[data-href="${section.id}"]`);
      console.log(nav.classList);

      if (box.top <= 150 && box.bottom >= 150) {
        //console.log(obj)
        section.classList.add("active");
        nav.classList.add("active1");
        // Apply active state on the current section and the corresponding Nav link.
      } else {
        //console.log(obj)
        section.classList.remove("active");
        nav.classList.remove("active1");
        // Remove active state from other section and corresponding Nav link.
      }
    }
}


/* This function is called on click of nav item*/

 function onNavClick(event) {
     event.preventDefault()
     document.getElementById(event.target.dataset.href).scrollIntoView({behavior:'smooth'})
     console.log(event)
 }
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('scroll', function () {
    manageActiveSectionState();
  })


 

  

// Build menu 

// Scroll to section on link click

// Set sections as active


