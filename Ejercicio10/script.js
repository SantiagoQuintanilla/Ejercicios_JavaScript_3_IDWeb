fetch("https://jsonplaceholder.typicode.com/users")
  .then(respuesta => respuesta.json())
  .then(usuarios => {
    usuarios.forEach(usuario => console.log(usuario.name));
  })
  .catch(error => console.error("Error:", error));