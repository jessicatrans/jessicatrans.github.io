// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

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
