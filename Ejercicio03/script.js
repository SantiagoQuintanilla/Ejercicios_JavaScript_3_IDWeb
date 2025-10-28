const ul=document.getElementById("lista");
["uno", "dos", "tres"].forEach(text => {
    const li=document.createElement("li"); 
    li.textContent=text; 
    ul.appendChild(li); 
}); 
const li4=document.createElement("li"); 
li4.textContent="cuatro";
ul.appendChild(li4); 
const segundo=ul.children[1]; 
if (segundo) segundo.remove();