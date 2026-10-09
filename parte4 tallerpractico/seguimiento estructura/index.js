
    const input = document.getElementById("campoEscritura");
    const vista = document.getElementById("vistaPrevia");

  input.addEventListener("input", (e) => {
    vista.textContent = e.target.value;
  });
