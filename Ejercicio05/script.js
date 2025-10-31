const boton=document.createElement("button");
boton.textContent="Cambiar color de fondo";

document.body.appendChild(boton);

function colorAleatorio(){
    const r=Math.floor(Math.random()*256);
    const g=Math.floor(Math.random()*256);
    const b=Math.floor(Math.random()*256); 
    return `rgb(${r},${g},${b})`;
}
boton.addEventListener("click", () => {
    const color=colorAleatorio();
    document.body.style.backgroundColor=color;
    console.log("Color aleatorio: ", color); 
});