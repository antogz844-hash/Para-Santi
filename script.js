const inicio = new Date("2023-08-03T00:00:00");

function actualizarContador() {

  const ahora = new Date();

  let diferencia = ahora - inicio;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  diferencia %= (1000 * 60 * 60 * 24);

  const horas = Math.floor(diferencia / (1000 * 60 * 60));
  diferencia %= (1000 * 60 * 60);

  const minutos = Math.floor(diferencia / (1000 * 60));
  diferencia %= (1000 * 60);

  const segundos = Math.floor(diferencia / 1000);

  document.getElementById("tiempo").innerHTML =
    `${dias} días<br>${horas} horas<br>${minutos} minutos<br>${segundos} segundos ❤️`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

const boton = document.getElementById("abrirCarta");
const carta = document.getElementById("contenidoCarta");

boton.addEventListener("click", () => {

  if (carta.style.display === "block") {
    carta.style.display = "none";
    boton.textContent = "Abrir carta 🤎";
  } else {
    carta.style.display = "block";
    boton.textContent = "Cerrar carta 🤎";
  }

});