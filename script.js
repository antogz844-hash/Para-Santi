const botonCarta = document.getElementById("abrirCarta");
const carta = document.getElementById("contenidoCarta");

botonCarta.addEventListener("click", function () {
  if (carta.style.display === "block") {
    carta.style.display = "none";
    botonCarta.textContent = "Abrir carta 🤎";
  } else {
    carta.style.display = "block";
    botonCarta.textContent = "Cerrar carta 🤎";
  }
});