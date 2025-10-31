const form=document.createElement("form");

const input=document.createElement("input");
input.type="text";
input.placeholder="Escribir tarea";

const botonAgregar=document.createElement("button");
botonAgregar.textContent="Agregar tarea";

form.appendChild(input);
form.appendChild(botonAgregar);

const lista=document.createElement("ul");

document.body.appendChild(form);
document.body.appendChild(lista);

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const textoTarea=input.value;

    const li=document.createElement("li");
    li.textContent=textoTarea;

    const botonEliminar=document.createElement("button");
    botonEliminar.textContent="Eliminar tarea";
    botonEliminar.style.marginLeft="10px";

    botonEliminar.addEventListener("click", () => {
        lista.removeChild(li);
    });

    li.appendChild(botonEliminar);
    lista.appendChild(li);

    input.value="";
});