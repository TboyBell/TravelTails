// Variables
const navToggle = document.getElementById('nav_toggle');
const navContainer = document.getElementById('nav_container');
const navLinks = document.querySelectorAll('#nav_container li a');


// Slick Nav
navToggle.addEventListener('click', () => {
	
	navToggle.classList.toggle('active');
	navContainer.classList.toggle('active');
});

// Close menu when clicking a link

navLinks.forEach(link => {
	
	link.addEventListener('click', () => {
	navToggle.classList.remove('active');
	navContainer.classList.remove('active');
	});
	
});
