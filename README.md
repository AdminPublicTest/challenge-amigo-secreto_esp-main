# 🎉 Amigo Secreto [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 📌 Descripción

Este proyecto es una aplicación web simple que permite a los usuarios ingresar nombres de amigos y realizar un sorteo aleatorio para determinar quién será el "Amigo Secreto".

## ✨ Funcionalidades

✅ Agregar nombres a la lista.  
✅ Validar la entrada para evitar nombres vacíos o duplicados.  
✅ Visualizar los nombres ingresados en una lista.  
✅ Sortear un "Amigo Secreto" aleatoriamente.  
✅ Mostrar el resultado del sorteo en pantalla.  

## 📷 Capturas de pantalla

### 1️⃣ **Interfaz inicial**

> Se muestra un campo de entrada y un botón para agregar nombres.

![Interfaz inicial](assets/interfaz_inicial.png)

### 2️⃣ **Nombres agregados**

> Los nombres ingresados aparecen en la lista de la interfaz.

![Nombres agregados](assets/nombres_agregados.gif)

### 3️⃣ **Sorteo realizado**

> Al hacer clic en "Sortear amigo", se elige un nombre aleatorio y se muestra el resultado.

![Sorteo realizado](assets/sorteo_realizado.gif)

## 🛠️ Tecnologías utilizadas

- HTML
- CSS
- JavaScript

## 📌 Cómo usarlo

```javascript
// Agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
}

// Sorteo aleatorio
function sortearAmigo() {
    let resultadoElement = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("Debe agregar al menos un nombre para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    resultadoElement.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}
```
## 🔥 Mejoras futuras

- Agregar la opción de eliminar nombres de la lista.
- Permitir exportar la lista en formato CSV o PDF.
- Implementar un temporizador para el sorteo.
- Mejorar la interfaz con animaciones CSS.




