const form = document.getElementById("formulario");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;

  const datos = {
    nombre: nombre,
    email: email
  };

  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datos)
    });

    if (!respuesta.ok) {
      throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }

    const resultado = await respuesta.json();

    mensaje.textContent = "Datos enviados correctamente. ID generado: " + resultado.id;
    mensaje.style.color = "green";

  } catch (error) {
    mensaje.textContent = "Ocurrió un error: " + error.message;
    mensaje.style.color = "red";
  }
});