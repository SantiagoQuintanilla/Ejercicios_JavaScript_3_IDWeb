const contenedor=document.createElement("div");

for (let i=1; i<=3; i++) {
  const caja=document.createElement("div");
  caja.classList.add("caja");
  caja.textContent=`Caja ${i}`;
  contenedor.appendChild(caja);
}

document.body.appendChild(contenedor);

const estilo=document.createElement("style");
estilo.textContent= `
  .caja {
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    display: inline-block;
    text-align: center;
    line-height: 100px;
    cursor: pointer;
  }
  .activa {
    background-color: lightblue;
  }
`;
document.head.appendChild(estilo);

contenedor.addEventListener("click", (e) => {
  if (e.target.classList.contains("caja")) {
    document.querySelectorAll(".caja").forEach(c => c.classList.remove("activa"));
    e.target.classList.add("activa");
  }
});