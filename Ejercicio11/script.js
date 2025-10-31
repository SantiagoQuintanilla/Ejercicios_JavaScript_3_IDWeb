const lista=document.createElement("ol");
document.body.appendChild(lista);

fetch("https://jsonplaceholder.typicode.com/users")
  .then(respuesta => respuesta.json())
  .then(usuarios => {
    usuarios.forEach(usuario => {
        const item = document.createElement("li");
        item.textContent = `${usuario.name} — ${usuario.email}`;
        lista.appendChild(item);
    });
  })
  .catch(error => console.error("Error:", error));