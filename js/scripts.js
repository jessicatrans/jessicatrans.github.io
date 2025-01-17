// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

/* 
========================
    Typewriter
========================
*/

var app = document.getElementById("typewriter");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
  deleteSpeed: 5,
});

typewriter
  // .typeString("hello!")
  // .pauseFor(1000)
  // .deleteAll()
  // .pauseFor(500)
  // .typeString("nice to meet you.")
  // .pauseFor(1000)
  // .deleteAll()
  // .pauseFor(500)
  // .typeString("i'm a software developer.")
  // .pauseFor(1000)
  // .deleteAll()
  // .pauseFor(500)
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
  // .pauseFor(500)
  // .typeString("my cat's name is sago!")
  // .pauseFor(1000)
  // .deleteAll()
  // .typeString("i also like to draw and design.")
  // .pauseFor(1000)
  // .deleteAll()
  // .pauseFor(500)
  // .typeString("thanks for visiting! :D")
  // .pauseFor(1000)
  // .deleteAll()
  .start();

$(document).ready(function() {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + ' by Marsel Van Oosten';
      }
    }
  });
});
