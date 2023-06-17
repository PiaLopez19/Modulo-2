/************** AUTORIZACION DE ADMINISTRACION ****************/

let botonIniciar = document.getElementById('formulario')
botonIniciar.addEventListener('submit', function(event) {
  event.preventDefault()

  let usuario = document.getElementById('usuario').value;
  let contrasenia = document.getElementById('password').value;

  if(usuario === "admin" && contrasenia === "admin") {
    alert('Iniciaste sesion como administrador')
    window.location.href = "../pages/admin.html"
  } else {
    alert('Usuario o contraseña incorrecto')
  }
})