export function filtrarMayores(usuarios) {
  const mayores = []; 

  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i];

    if (usuario.edad >= 18) {
      mayores.push(usuario);
    }
  }

  return mayores;
}