// Paso 1: Crear un array para almacenar los nombres de los amigos
// Inicialmente, este array estará vacío y se llenará con los nombres que el usuario ingrese.
let amigos = [];

// Paso 2: Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el campo de entrada donde el usuario escribe el nombre
    let inputAmigo = document.getElementById("amigo");

    // Obtener el valor ingresado y eliminar espacios innecesarios
    let nombre = inputAmigo.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre."); // Mensaje de error si el campo está vacío
        return; // Detener la función si el nombre no es válido
    }

    // Verificar si el nombre ya está en la lista para evitar duplicados
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return; // No agregar el nombre si ya existe
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);

    // Llamar a la función que actualiza la lista en la pantalla
    actualizarLista();

    // Limpiar el campo de entrada después de agregar el nombre
    inputAmigo.value = "";
}

// Paso 3: Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    // Obtener el elemento <ul> donde se mostrarán los nombres de los amigos
    let listaElement = document.getElementById("listaAmigos");

    // Limpiar la lista existente para evitar duplicados
    listaElement.innerHTML = "";

    // Recorrer el array de amigos y agregar cada nombre como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement("li"); // Crear un nuevo <li>
        nuevoElemento.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        listaElement.appendChild(nuevoElemento); // Agregar el <li> a la lista en la interfaz
    }
}

// Paso 4: Función para sortear un amigo al azar
function sortearAmigo() {
    // Obtener el elemento donde se mostrará el resultado
    let resultadoElement = document.getElementById("resultado");

    // Validar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("Debe agregar al menos un nombre para sortear."); // Mensaje de error si la lista está vacía
        return; // Detener la función si no hay nombres
    }

    // Generar un índice aleatorio usando Math.random() y Math.floor()
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado usando el índice aleatorio
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}

