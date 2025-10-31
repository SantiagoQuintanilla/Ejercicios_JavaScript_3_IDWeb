const tabla=document.createElement("table");
tabla.border="1";
tabla.style.borderCollapse="collapse";
tabla.style.marginTop="10px";

const encabezado=document.createElement("tr");
encabezado.innerHTML="<th>Nombre</th><th>Edad</th>";
tabla.appendChild(encabezado);

let datos=[
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "María", edad: 22 },
    { nombre: "Carlos", edad: 28 }
];

let ascendente=true; 

function renderizarTabla() {
    while(tabla.rows.length>1) {
        tabla.deleteRow(1);
    }

    datos.forEach(persona => {
        const fila=document.createElement("tr");
        fila.innerHTML=`<td>${persona.nombre}</td><td>${persona.edad}</td>`;
        tabla.appendChild(fila);
    });
}

const botonOrdenar=document.createElement("button");
botonOrdenar.textContent="Ordenar por edad (Ascendente)";

botonOrdenar.addEventListener("click", () => {
    ascendente=!ascendente; 
    datos.sort((a, b) => ascendente ? a.edad-b.edad:b.edad-a.edad);

    botonOrdenar.textContent=ascendente?"Ordenar por edad (Ascendente":"Ordenar por edad (Descendente)";
    renderizarTabla();
});

document.body.appendChild(botonOrdenar);
document.body.appendChild(tabla);

renderizarTabla();