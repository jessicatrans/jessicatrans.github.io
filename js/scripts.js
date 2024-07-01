// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

/* 
========================
    Typewriter
========================
*/

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('hello!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('nice to meet you.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("my name is jessica.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm a uc davis alumni (go aggies!).")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i have a b.s. degree in computer science")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("and a minor in asian american studies:)")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i love otters.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("my cat's name is sago!")
    .pauseFor(1000)
    .deleteAll()
    .typeString("i also like to draw and design.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("making digital art is my favorite! <3")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("thanks for visiting! :D")
    .pauseFor(1000)
    .deleteAll()
    .start();

/* 
========================
    Scrolling Feature
========================
*/

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var navbar = document.getElementById("nav");
    var link = "/index.html";

    if (window.location.pathname == link) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            navbar.style.top = "0";
        } else {
            // hides navbar
            navbar.style.top = "-12.5rem";
            var x = document.getElementById("nav");
            if (x.className === "navbar responsive") {
                x.className = "navbar";
            }
        }
    }
}

/* 
=============================
    Modal Pop Up Feature
=============================
*/
document.addEventListener('click', function (e) {
    var clickedElement = e.target;

    // Check if the clicked element has the 'toggle-modal' class
    if (clickedElement.classList.contains('toggle-modal')) {
        // Find the closest parent with the 'container' class
        var container = clickedElement.closest('.container');

        // Find the modal associated with the container
        var modalId = container.getAttribute('id').replace('myBtn', 'modal');
        var modal = document.getElementById(modalId);

        // Toggle the modal
        toggleModal(modal);
    }

    // Check if the clicked element has the 'close' class
    if (clickedElement.classList.contains('close')) {
        // Find the closest parent with the 'modal' class
        var modal = clickedElement.closest('.modal');

        // Toggle the modal
        toggleModal(modal);
    }

    // Check if the clicked element is the overlay (background) of the modal
    if (clickedElement.classList.contains('modal')) {
        // Close the modal
        toggleModal(clickedElement);
    }
});

function toggleModal(modal) {
    modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none';
}


// if not under index.html, then keep navbar visible at all times
// function navBar() {
//     if (window.location.pathname == "/art.html") {
//         var navbar = document.getElementsByClassName('navbar');
//         navbar.style.top = '';
//     }
// }

// navBar();

/* 
========================
    Responsive Navbar
========================
*/
function hamburgerIcon() {
    var x = document.getElementById("nav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
}

