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
    .typeString("i'm a student at uc davis (go aggies!).")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("i'm studying computer science.")
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

/* 
========================
    Click Button
========================
*/

// const button = document.getElementsByClassName("buttons");

// button.addEventListener('click', () => {
//   button.style.opacity = '0.7'; // Reduce opacity when the button is clicked
// });

// document.addEventListener('click', (event) => {
//   // Restore the original opacity when something else is clicked
//   if (event.target !== button) {
//     button.style.opacity = '1';
//   }
// });