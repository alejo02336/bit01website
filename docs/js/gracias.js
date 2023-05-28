// Obtener los elementos donde se mostrarán los datos
let nameElement = document.getElementById("name");
let lastnameElement = document.getElementById("lastname");
let messageElement = document.getElementById("message");

// Obtener los valores almacenados en localStorage
let name = localStorage.getItem("name");
let lastname = localStorage.getItem("lastname");
let message = localStorage.getItem("message");

// Mostrar los datos en los elementos correspondientes
nameElement.textContent = "Name: " + name;
lastnameElement.textContent = "Last name: " + lastname;
messageElement.textContent = "Message: " + message;

// Limpiar los datos almacenados en localStorage
localStorage.removeItem("name");
localStorage.removeItem("lastname");
localStorage.removeItem("message");
