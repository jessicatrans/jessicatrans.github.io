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
=================================
    Tablet View: u-1/2 to u-1/1
=================================
*/

// changes all u-1/2 to u-1/1 when 64em for screen
function updateClassBasedOnScreenSize() {
    var changeSize = document.querySelectorAll('.o-grid__col');
    let changeCount = 0;
    // Check if the media query condition is met
    if (window.matchMedia("(max-width: 64em)").matches) {
        // If the condition is met, change the class to "u-1/1"
        changeSize.forEach(element => {
            if (changeCount < 2) {
                element.classList.replace('u-1/2', 'u-1/1');
                changeCount++;
            }
        });
    changeCount = 0;
    //   document.querySelector('.o-grid__col').classList.replace('u-1/2', 'u-1/1');
    } else {
        // If the condition is not met, change the class back to "u-1/2"
        changeSize.forEach(element => {
            if (changeCount < 2) {
                element.classList.replace('u-1/1', 'u-1/2');
                changeCount++;
            }
        });
        changeCount = 0;
        // document.querySelector('.o-grid__col').classList.replace('u-1/1', 'u-1/2');
    }
}
  
// Call the function initially to set the class based on the screen size
updateClassBasedOnScreenSize();

// Add an event listener to update the class when the screen size changes
window.addEventListener('resize', updateClassBasedOnScreenSize);

// Additionally, you can call the function when the page loads
window.addEventListener('load', updateClassBasedOnScreenSize);






// When the user scrolls down 20px from the top of the document, slide down the navbar
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   var x = document.getElementById("nav");
//   if (x.className === "topnav") {
//     if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
//       document.getElementById("nav").style.top = "0";
//     } else {
//       document.getElementById("nav").style.top = "-70px";
//     }
//   } else {
//     if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
//       document.getElementById("nav").style.top = "0";
//     } else {
//       // hides navbar
//       document.getElementById("nav").style.top = "-230px";
//     }
//   }

// }

// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("each-project");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     console.log(element.className, arr2[i]);
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("button-section");
// var btns = btnContainer.getElementsByClassName("filter-button");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//     console.log(current);
//   });
// }


// // Responsive Topnav
// function hamburgerIcon() {
//   var x = document.getElementById("nav");
//   if (x.className === "navbar container") {
//     x.className += " responsive";
//   } else {
//     x.className = "navbar container";
//   }
// }
