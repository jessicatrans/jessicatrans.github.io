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
  .typeString("hi, nice to meet you.")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
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
  .pauseFor(500)
  // .typeString("my cat's name is sago!")
  // .pauseFor(1000)
  // .deleteAll()
  .typeString("thanks for visiting! :D")
  .pauseFor(1000)
  .deleteAll()
  .start();