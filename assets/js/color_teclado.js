

const color = document.getElementById("key");

document.addEventListener("keydown",  (event) => {
    if (event.key === "a") {
        color.style.backgroundColor = '#ff0080';
    } else if (event.key === 's') {
        color.style.backgroundColor = '#ff8000';
    }
     else if (event.key === 'd') {
        color.style.backgroundColor = '#ff8000';
    }
    })