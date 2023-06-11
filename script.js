function autorizacionAdministracion() {
  let usuario = prompt('Ingrese el usuario')
  let contrasenia = prompt('Ingrese la contraseña')

  if(usuario === "admin" && contrasenia === "admin") {
    return true;
  }
  else {
    window.location.href = "https://www.google.com";
  }
}

autorizacionAdministracion();

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
    nombre: "Zapatillas Air Max ",
    descripcion: "Estilo Genome - Blancas - 42",
    precio: "$32.000"
  }
];

function generarFilaProducto(producto) {
  const fila = document.createElement('tr');

  const celdas = ['id', 'nombre', 'descripcion', 'precio'];

  for (const propiedad of celdas) {
    const celda = document.createElement('td');
    celda.innerText = producto[propiedad];
    fila.appendChild(celda);
  }

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

let productoCreado1 = new NuevoProducto("Remera Puma", "Gris comun - Talle M", "$11.000");
productoCreado1.crearProducto();

console.log(productos); 



















































/* Aclaraciones

El appendChild me lo suma al final de todos los objetos
append nos permite agregar varios hijos a la vez

let ham1 = ""
let ham2 = ""
let ham3 = ""

document.querySelector('Clase o ID').append(ham1, ham2, ham3);


*/

