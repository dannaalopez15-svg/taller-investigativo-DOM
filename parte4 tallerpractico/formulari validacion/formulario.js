
  const form = document.getElementById("miForm");
  const errorMsg = document.getElementById("errorMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value.trim();

    if(!nombre || !email || !pass) {
      errorMsg.textContent = "Todos los campos son obligatorios.";
    } else {
      errorMsg.style.color = "green";
      errorMsg.textContent = "Formulario enviado con éxito.";
    }
  });
