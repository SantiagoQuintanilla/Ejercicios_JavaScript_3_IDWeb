const cont=document.getElementById("contenedor"); 
console.log("padre: ", cont.parentNode); 
console.log("primer hijo (elemento): ", cont.firstElementChild); 
console.log("último hijo (elemento): ", cont.lastElementChild); 
console.log("todos los nodos hijos (incluye texto): ", cont.childNodes);