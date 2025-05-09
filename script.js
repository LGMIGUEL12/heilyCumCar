(function () {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
    openB = $('open'),
    closeB = $('close'),
    timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

})();



const style = document.querySelector(".text pre style");
const card = document.querySelector(".front face back face");


script = `
    .....
Hola Señorita bella!
  Primero que nada y antes
que todo, feliz cumpleaños
espero que este dia asi como
los demas sea maravilloso
que cada año que cumpla siga
tan  bella y espectacular
como lo a sido siempre.

La quiero demasiado y 
espero enserio que me le
valla de maravilla siempre
la quiero y siempre quiero
que le vaya bien señorita
 ..........
          Feliz Cumpleaños princesa hermosa
`;


let counter = 0;

let intervalID = setInterval(() => {
  counter++;
  style.textContent = script.substring(0, counter);
  style.scrollTop = style.scrollHeight;
  if (counter > script.length) {
    clearInterval(intervalID);
  }
}, 90);