import { usuarios } from "./datos.js";
import { filtrarMayores } from "./filtros.js";

const mayores = filtrarMayores(usuarios);

console.log("👥 Usuarios mayores de 18 años:");

mayores.forEach(usuario => {
  console.log(`- ${usuario.nombre} (${usuario.edad} años)`);
});