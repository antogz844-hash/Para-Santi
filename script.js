// CARTA 💌
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


// CONTADOR ⏳
const fechaInicio = new Date("2023-08-03T00:00:00");

function actualizarContador() {
  const ahora = new Date();

  let años = ahora.getFullYear() - fechaInicio.getFullYear();
  let meses = ahora.getMonth() - fechaInicio.getMonth();
  let dias = ahora.getDate() - fechaInicio.getDate();

  if (dias < 0) {
    meses--;
    const ultimoMes = new Date(
      ahora.getFullYear(),
      ahora.getMonth(),
      0
    ).getDate();

    dias += ultimoMes;
  }

  if (meses < 0) {
    años--;
    meses += 12;
  }

  const diferencia = ahora - fechaInicio;
  const diasTotales = Math.floor(diferencia / (1000 * 60 * 60 * 24));

  document.getElementById("tiempo").innerHTML =
    `<strong>${años} años, ${meses} meses y ${dias} días</strong><br>
     <span>❤️ ${diasTotales} días juntos ❤️</span>`;
}

actualizarContador();
setInterval(actualizarContador, 1000);
// CONTADOR DE TIEMPO JUNTOS 🤎

function actualizarContador() {
    const inicio = new Date(2023, 7, 3);
    const ahora = new Date();

    let años = ahora.getFullYear() - inicio.getFullYear();
    let meses = ahora.getMonth() - inicio.getMonth();
    let dias = ahora.getDate() - inicio.getDate();

    if (dias < 0) {
        meses--;
        dias += new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            0
        ).getDate();
    }

    if (meses < 0) {
        años--;
        meses += 12;
    }

    const diferencia = ahora - inicio;
    const diasTotales = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const contador = document.getElementById("tiempo");

    if (contador) {
        contador.innerHTML =
            años + " años, " +
            meses + " meses y " +
            dias + " días juntos 🤎" +
            "<br><small>" +
            diasTotales +
            " días desde que empezó nuestra historia</small>";
    }
}

actualizarContador();
setInterval(actualizarContador, 1000);