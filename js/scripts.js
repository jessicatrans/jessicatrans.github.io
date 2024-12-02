// Typewriter created by Tameem Safi.
// source: https://github.com/tameemsafi/typewriterjs

/* 
========================
    Typewriter
========================
*/

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 50,
  deleteSpeed: 5,
});

typewriter
  .typeString("hello!")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("nice to meet you.")
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
  .typeString("my cat's name is sago!")
  .pauseFor(1000)
  .deleteAll()
  .typeString("i also like to draw and design.")
  .pauseFor(1000)
  .deleteAll()
  .pauseFor(500)
  .typeString("thanks for visiting! :D")
  .pauseFor(1000)
  .deleteAll()
  .start();


/* 
========================
    Form Submission
========================
*/


const submitButton = document.getElementsByClassName('submit');
const form = document.getElementById('contact-form');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Simulate form submission (optional, if needed)
  // You can use fetch API or other methods to send data
  // to your server if needed for processing.

  // Display success message
  const successMessage = document.createElement('p');
  successMessage.textContent = "Your message has been sent successfully!"; 1    

  form.appendChild(successMessage);
});
