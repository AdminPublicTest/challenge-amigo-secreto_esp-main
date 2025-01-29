// Lista para almacenar los nombres ingresados
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const listaElement = document.getElementById("listaAmigos");

    // Obtener el valor del input y eliminar espacios en blanco
    const nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Validar que el nombre no esté duplicado
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }

    // Agregar el nombre a la lista
    listaAmigos.push(nombre);

    // Crear un nuevo elemento <li> para la lista
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    
    // Agregar el elemento a la lista visible
    listaElement.appendChild(nuevoElemento);

    // Limpiar el campo de entrada después de agregar
    inputAmigo.value = "";
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    const resultadoElement = document.getElementById("resultado");

    // Validar que haya al menos un nombre en la lista
    if (listaAmigos.length === 0) {
        alert("Debe agregar al menos un nombre para sortear.");
        return;
    }

    // Seleccionar un nombre al azar
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en la página
    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
