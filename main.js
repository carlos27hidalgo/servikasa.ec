  
let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Tierra de las Flores y las Frutas')
  .pauseFor(200)
  .deleteChars(10)
  .start();