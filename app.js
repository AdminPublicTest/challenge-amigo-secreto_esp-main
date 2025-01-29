// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Obtiene el valor del input
    const nombre = input.value.trim(); // Elimina espacios en blanco al inicio y al final
    
    // Verifica que el nombre no esté vacío y que no se repita en la lista
    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre); // Agrega el nombre a la lista
        actualizarLista(); // Llama a la función para mostrar los nombres en pantalla
        input.value = ""; // Limpia el campo de texto después de agregar un nombre
    } else {
        alert("Por favor, ingrese un nombre válido y que no esté repetido.");
    }
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    const lista = document.getElementById("listaAmigos"); // Obtiene el elemento UL donde se mostrarán los nombres
    lista.innerHTML = ""; // Limpia la lista antes de actualizar
    
    amigos.forEach((amigo) => {
        const li = document.createElement("li"); // Crea un nuevo elemento de lista
        li.textContent = amigo; // Agrega el nombre como texto dentro del elemento
        lista.appendChild(li); // Añade el elemento a la lista en la interfaz
    });
}

// ✅✅✅ FUNCIÓN ACTUALIZADA PARA MOSTRAR UN SOLO AMIGO SECRETO ✅✅✅
function sortearUnAmigo() {
    if (amigos.length === 0) { // Verifica que haya al menos un amigo en la lista
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtiene el nombre sorteado
    
    // Muestra el resultado en la interfaz con el formato correcto
    const resultadoDiv = document.getElementById("resultado"); 
    resultadoDiv.innerHTML = `<p style="color: green; font-weight: bold; font-size: 20px; text-align: center;">El amigo secreto sorteado es: ${amigoSorteado}</p>`;
}

// Función para reiniciar la lista de amigos
function reiniciarLista() {
    amigos = []; // Vacía la lista de amigos
    actualizarLista(); // Actualiza la interfaz para reflejar la lista vacía
    document.getElementById("resultado").innerHTML = ""; // Limpia los resultados del sorteo
}



