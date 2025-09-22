// AQUÍ ESTÁ EL CÓDIGO BASE, NO BORRAR NI MODIFICAR
const filaAmigos = [];
const inputAmigoSecre = document.getElementById("amigo");
const htmlListaAmigos = document.getElementById("listaAmigos");
const htmlResultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputAmigoSecre.value.trim(); 

    if (nombre === "") {//Bloqueo a caracteres vacios
        alert("Favor de rellenar, los caracteres no pueden estar vacios.");
        return;
    }

    filaAmigos.push(nombre);
    htmlListaAmigos.innerHTML += `<li>${nombre}</li>`;
    inputAmigoSecre.value = ""; 
}

function sortearAmigo() {
    if (filaAmigos.length === 0) {//Por si no hay nombres
        alert("No hay nombres para sortear.");
        return;
    }

    const random = Math.floor(Math.random() * filaAmigos.length);
    const amigoSecreto = filaAmigos[random];
    htmlResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
