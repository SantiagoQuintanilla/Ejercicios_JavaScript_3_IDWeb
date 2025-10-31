const lista=document.createElement("ul");

const item1=document.createElement("li");
item1.textContent="Elemento N°1";
lista.appendChild(item1);

const item2=document.createElement("li");
item2.textContent="Elemento N°2";
lista.appendChild(item2);

const item3=document.createElement("li");
item3.textContent="Elemento N°3";
lista.appendChild(item3);

document.body.appendChild(lista);

console.log("Lista original:");
for (let li of lista.children) {
  console.log(li.textContent);
}

const nuevoItem4=document.createElement("li");
nuevoItem4.textContent="Elemento N°4 (agregado dinámicamente con JS";
lista.appendChild(nuevoItem4);

const elemento2=lista.children[1];
lista.removeChild(elemento2);

console.log("Lista modificada:");
for (let li of lista.children) {
  console.log(li.textContent);
}