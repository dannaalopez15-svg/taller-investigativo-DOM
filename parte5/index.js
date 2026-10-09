
    const titulo = document.getElementById("titulo");
    const mensaje = document.getElementById("mensaje");
    const boton = document.getElementById("boton");

    boton.addEventListener("click", function(event) {
  mensaje.textContent = "El botón fue presionado";
  titulo.style.color = (titulo.style.color === "blue") ? "red" : "blue";
  console.log(event.target);
});
