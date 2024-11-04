let hidden = true;

function toggleText() {
  const myText = document.getElementById("myText");
  myText.classList.toggle("hidden");

  const myButton = document.getElementById("myButton");
  if (hidden) {
    myButton.innerHTML = "Ocultar exceso de texto";
  } else {
    myButton.innerHTML = "Seguir leyendo";
  }

  hidden = !hidden;
}

