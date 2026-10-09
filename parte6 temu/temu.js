
let cantidadItems = 0;


const btnAñadir = document.getElementById("btnAñadir");
const contadorCesta = document.getElementById("contadorCesta");

btnAñadir.addEventListener("click", () => {

  cantidadItems++;

  contadorCesta.textContent = cantidadItems;

  btnAñadir.textContent = "¡Añadido! ✓";
  btnAñadir.style.backgroundColor = "#28a745";

  setTimeout(() => {
    btnAñadir.textContent = "Añadir a la cesta";
    btnAñadir.style.backgroundColor = "#fb7701";
  }, 1500);
});