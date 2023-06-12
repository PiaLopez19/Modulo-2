/************** AUTORIZACION DE ADMINISTRACION ****************/

function autorizacionAdministracion() {
  let usuario = prompt('Ingrese el usuario')
  let contrasenia = prompt('Ingrese la contraseña')

  if(usuario === "admin" && contrasenia === "admin") {
    alert('Iniciaste sesion correctamente =)')
  }
  else {
    alert('El usuario ingresado es incorrecto')
    window.location.href = "https://www.google.com";
  }
}

autorizacionAdministracion();

/**************** PRODUCTOS *******************/

let productos = [
  {
    id: 1,
    nombre: "Camiseta de la Seleccion Argentina",
    descripcion: "Con 3 estrellas - Celesta y blanca - Talle M",
    precio: "$15.000"
  },
  {
    id: 2,
    nombre: "Nike Dri-FIT Phenom Elite",
    descripcion: "Pantalon largo - Negro - Talle 40",
    precio: "$12.000"
  },
  {
    id: 3,
    nombre: "Zapatillas Air Max",
    descripcion: "Estilo Genome - Blancas - 42",
    precio: "$32.000"
  },
  {
    id: 4,
    nombre: "Pantalon adidas Essential",
    descripcion: "Essentials 3 tiras  - Negras - 38",
    precio: "$19.000"
  },
  {
    id: 5,
    nombre: "Musculosa Dama Verano 2023",
    descripcion: "Negro - 34",
    precio: "$14.000"
  },
  {
    id: 6,
    nombre: "Zapatillas Air Max",
    descripcion: "Estilo Genome - Blancas - 42",
    precio: "$32.000"
  },
  {
    id: 7,
    nombre: "Zapatillas Air Max",
    descripcion: "Estilo Genome - Blancas - 42",
    precio: "$32.000"
  },
  {
    id: 8,
    nombre: "Zapatillas Air Max",
    descripcion: "Estilo Genome - Blancas - 42",
    precio: "$32.000"
  }
];

/********************* GENERAMOS LAS FILAS Y LAS CELDAS ******************/

function generarFilaProducto(producto) {
  const fila = document.createElement('tr');

  const celdas = ['id', 'nombre', 'descripcion', 'precio'];

  for (const propiedad of celdas) {
    const celda = document.createElement('td');
    celda.innerText = producto[propiedad];
    fila.appendChild(celda);
  }

  let botonEditar = document.createElement('td');
  botonEditar.innerHTML = '<button class="rounded">Editar</button>';
  fila.appendChild(botonEditar)
 // botonEditar.addEventListener('click', editarFilaProducto);

  let botonBorrar = document.createElement('td');
  botonBorrar.innerHTML = '<button class="rounded">Borrar</button>';
  fila.appendChild(botonBorrar)
  //botonBorrar.addEventListener('click', borrarFilaProducto);

  return fila;
}

function cargarProductos() {
  let tableBody = document.querySelector('#productos-table tbody');
  tableBody.innerHTML = '';

  productos.forEach(function(producto) {
    let fila = generarFilaProducto(producto);
    tableBody.appendChild(fila);
  });
}

cargarProductos();

/******************** CREAR NUEVO PRODUCTO *****************/

class NuevoProducto {
  constructor(nombre, descripcion, precio) {
    this.id = productos.length + 1;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
  crearProducto() {
    let newProduct = {
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio
    };
    productos.push(newProduct);
  }
}

/********************* BOTON DE AGREGAR PRODUCTO ******************/

function crearBotonCrearProducto() {
  const botonAgregar = document.querySelector('.crear-objeto');
  botonAgregar.innerHTML = `<button 
    type="button" 
    class="btn btn-success" 
    data-bs-toggle="modal" 
    data-bs-target="#exampleModal">Agregar producto
    </button>`;

  guardarProducto();
}

crearBotonCrearProducto();

function guardarProducto() {
  const botonAgregar = document.querySelector('#agregar-producto');
  botonAgregar.addEventListener('click', crearNuevoProducto);
}

function crearNuevoProducto(event) {

  event.preventDefault();

  const nombreProducto = document.getElementById('nombre-producto').value;
  const detalleProducto = document.getElementById('detalle-producto').value;
  const precioProducto = document.getElementById('precio-producto').value;

  alert(`Producto cargado correctamente`)

  if (nombreProducto && detalleProducto && precioProducto) {
    const productoCreado = new NuevoProducto(nombreProducto, detalleProducto, precioProducto);
    productoCreado.crearProducto();
    cargarProductos();

    document.getElementById('nombre-producto').value = '';
    document.getElementById('detalle-producto').value = '';
    document.getElementById('precio-producto').value = '';
  } 
  else {
    alert('Por favor, ingrese todos los datos del producto');
  }
}

console.log(productos); 



















































/* Aclaraciones

El appendChild me lo suma al final de todos los objetos
append nos permite agregar varios hijos a la vez

let ham1 = ""
let ham2 = ""
let ham3 = ""

document.querySelector('Clase o ID').append(ham1, ham2, ham3);


*/

