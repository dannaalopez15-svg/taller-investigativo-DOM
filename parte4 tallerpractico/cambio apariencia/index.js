  const seccion = document.getElementById("miSeccion");
  
  document.getElementById("btnCambiar").addEventListener("click", () => {
    seccion.classList.add("bg-custom");
  });
  
  document.getElementById("btnRestaurar").addEventListener("click", () => {
    seccion.classList.remove("bg-custom");
  });