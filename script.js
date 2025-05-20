document.addEventListener("DOMContentLoaded", function () {
  
  function añadirAlumno() {
   

    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
 const avatar = document.createElement("img");
avatar.src = `https://api.multiavatar.com/${nombre}.png`;
avatar.alt = "Avatar";
avatar.width = 40;

    avatar.classList.add("rounded-circle"); // para que se vea redonda (opcional con Bootstrap)
    console.log(nombre, apellidos, dni, telefono);
    insertarFila(avatar, nombre, apellidos, dni, telefono)
  }
  function insertarFila(avatar, nombre, apellidos, dni, telefono){
  const fila = document.createElement("tr");

  const tdAvatar = document.createElement("td");
  tdAvatar.appendChild(avatar);

  const tdNombre = document.createElement("td");
  tdNombre.textContent = nombre;

  const tdApellidos = document.createElement("td");
  tdApellidos.textContent = apellidos;

  const tdDNI = document.createElement("td");
  tdDNI.textContent = dni;

  const tdTelefono = document.createElement("td");
  tdTelefono.textContent = telefono;

  const tdAsistencia = document.createElement("td");

// Botón de asistencia (✔️)
const btnPresente = document.createElement("button");
btnPresente.innerHTML = `<i class="bi bi-check"></i>`;
btnPresente.classList.add("btn", "btn-outline-primary", "btn-sm");
btnPresente.setAttribute("type", "button");
btnPresente.addEventListener("click", function () {
  // Cambiar texto e icono
  this.textContent = "Presente";

  // Cambiar estilo
  this.classList.remove("btn-outline-primary");
  this.classList.add("btn-success", "fw-bold");

  // Opcional: desactivar para no volver a pulsar
  this.disabled = true;
});


// Botón de eliminar (🗑️)
const btnEliminar = document.createElement("button");
btnEliminar.innerHTML = `<i class="bi bi-trash"></i>`;
btnEliminar.classList.add("btn", "btn-danger", "btn-sm");
btnEliminar.setAttribute("type", "button");

btnEliminar.addEventListener("click", function () {
  if (confirm("¿Seguro que quieres eliminar este alumno?")) {
    this.closest("tr").remove();
  }
});



// Añadir ambos al <td>
tdAsistencia.appendChild(btnPresente);
tdAsistencia.appendChild(btnEliminar);


  fila.appendChild(tdAvatar);
  fila.appendChild(tdNombre);
  fila.appendChild(tdApellidos);
  fila.appendChild(tdDNI);
  fila.appendChild(tdTelefono);
  fila.appendChild(tdAsistencia);

  document.getElementById("listaAlumnos").appendChild(fila);
}

  document.getElementById("formularioAlumno").addEventListener("submit", function(e) {
    e.preventDefault();
    añadirAlumno();
  });

});
