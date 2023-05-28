document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los valores del formulario
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var message = document.getElementById("message").value;

  // Almacenar los valores en localStorage
  localStorage.setItem("name", name);
  localStorage.setItem("lastname", lastname);
  localStorage.setItem("message", message);

  // Redirigir a la página de mostrar.html
  window.location.href = "../html/gracias.html";
});
