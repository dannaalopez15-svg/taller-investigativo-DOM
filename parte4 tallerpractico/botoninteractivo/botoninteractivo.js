
  const parrafo = document.getElementById("parrafoTexto");
  const boton = document.getElementById("btnCambiar");

  boton.addEventListener("click", () => {
    parrafo.textContent = "¡El texto ha sido cambiado correctamente!";
  });
