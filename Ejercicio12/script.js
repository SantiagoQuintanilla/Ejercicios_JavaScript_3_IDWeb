const nuevoPost = {
  title: "Primer post",
  body: "Este es un ejemplo de publicación enviada con fetch.",
  userId: 1
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", 
  headers: {
    "Content-Type": "application/json" 
  },
  body: JSON.stringify(nuevoPost) 
})
  .then(respuesta => respuesta.json()) 
  .then(datos => {
    console.log("Respuesta del servidor:");
    console.log(datos); 
  })
  .catch(error => console.error("Error:", error));