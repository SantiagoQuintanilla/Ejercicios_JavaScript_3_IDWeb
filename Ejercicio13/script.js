async function obtenerDatos(url) {
  try {
    const respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error(`Error en la solicitud: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    console.log("✅ Datos obtenidos correctamente:", datos);
  } catch (error) {
    console.error("Ocurrió un error:", error.message);
  }
}