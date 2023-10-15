

const agregadiv = document.getElementById("agrega");
const color = document.getElementById("key");
let html = "";



document.addEventListener("keydown",  (event) => {
    if (event.key === "a") {
        color.style.backgroundColor = '#ff0080';
    }
     else if (event.key === 's') {
        color.style.backgroundColor = '#ff8000';
    }
     else if (event.key === 'd') {
        color.style.backgroundColor = '#82d6f6';
    }
    else if (event.key === 'q') {
        html += `<div id="hola" style="width: 200px; height: 200px; background-color: #800080; border: 2px black solid;">q</div>`;
        agregadiv.innerHTML = html;
    } else if (event.key === 'w') {
        html += `<div id="hola" style="width: 200px; height: 200px; background-color: #a0b2b9; border: 2px black solid;">w</div>`;
        agregadiv.innerHTML = html;
    } else if (event.key === 'e') {
        html += `<div id="hola" style="width: 200px; height: 200px; background-color: #ce741a; border: 2px black solid;">e</div>`;
        agregadiv.innerHTML = html;
    } 
    }
    )




