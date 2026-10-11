/* ========================================
   THEME SWITCHER
   Event Lifecycle:
   1. User Action     → User clicks the #themeToggle button
   2. Event Firing    → Browser fires a "click" event on the button element
   3. JS Callback     → The addEventListener callback function runs
   4. DOM/CSS Mutation → classList.toggle adds/removes "dark-mode" class on <body>,
                         which swaps all CSS custom properties, and the button
                         text updates via textContent
   ======================================== */

const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

themeToggleBtn.addEventListener('click', function () {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '\u2600\uFE0F Day';
    } else {
        themeToggleBtn.textContent = '\uD83C\uDF19 Night';
    }
});

/* ========================================
   MOBILE MENU TOGGLE
   ======================================== */

const menuToggleBtn = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggleBtn.addEventListener('click', function () {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
        menuToggleBtn.textContent = '\u2715';
    } else {
        menuToggleBtn.textContent = '\u2630';
    }
});

// Close menu when a nav link is clicked
const allNavLinks = navLinks.querySelectorAll('a');
allNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navLinks.classList.remove('active');
        menuToggleBtn.textContent = '\u2630';
    });
});

/* ========================================
   CONTACT FORM HANDLING
   ======================================== */

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('senderName').value;
    alert('Thank you, ' + name + '! Your postcard has been sent. \u2708\uFE0F');
    contactForm.reset();
});

/* ========================================
   SMOOTH ACTIVE SECTION HIGHLIGHT
   ======================================== */

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function () {
    let scrollY = window.scrollY + 100;

    sections.forEach(function (section) {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute('id');
        let navLink = document.querySelector('#navLinks a[href="#' + sectionId + '"]');

        if (navLink) {
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLink.style.color = 'var(--accent)';
            } else {
                navLink.style.color = '';
            }
        }
    });
});
