
  const input = document.getElementById("itemInput");
  const btn = document.getElementById("btnAdd");
  const lista = document.getElementById("miLista");

  btn.addEventListener("click", () => {
    if(!input.value.trim()) return;

    const li = document.createElement("li");
    li.textContent = input.value;

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Eliminar";
    btnBorrar.addEventListener("click", () => li.remove());

    li.appendChild(btnBorrar);
    lista.appendChild(li);
    input.value = "";
  });
