// Get the button element
let mybutton = document.getElementById("myBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Scroll to the top of the document when the button is clicked
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

//******************************************* */
//**************** MOBILE NAV *************** */

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

// Listen for a click on the navToggle
// check if mobile Nav contains Show Mobile nav class. If it doesn't add class
// Listen for a click event on the body
// if body contains show mobile nav class, remove it.
// else, remove show mobile nav class.

navToggle.addEventListener('click', () => {
	if (!mobileNav.classList.contains('show-mobile-nav')) {
		mobileNav.classList.add('show-mobile-nav')
		document.body.addEventListener('click', e => {
			if (!navToggle.contains(e.target)) {
				mobileNav.classList.remove('show-mobile-nav')
			}
		})
	} else {
		mobileNav.classList.remove('show-mobile-nav')
	}
})