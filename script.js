// Base de productos predeterminado
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

// Generamos las fila y cada valor de la celdas
// function generarFilaProducto(producto) {
//   let fila = document.createElement('tr'); // Defino la linea

//   let idCelda = document.createElement('td'); // Defino la celda
//   idCelda.textContent = producto.id;
//   fila.appendChild(idCelda);

//   let nombreCelda = document.createElement('td'); // Defino la celda
//   nombreCelda.textContent = producto.nombre;
//   fila.appendChild(nombreCelda);

//   let descripcionCelda = document.createElement('td'); // Defino la celda
//   descripcionCelda.textContent = producto.descripcion;
//   fila.appendChild(descripcionCelda);

//   let precioCelda = document.createElement('td'); // Defino la celda
//   precioCelda.textContent = producto.precio;
//   fila.appendChild(precioCelda);

//   // let borrarCelda = document.createElement('td btn'); // Defino la celda
//   // fila.appendChild(borrarCelda);

//   return fila;
// }

function generarFilaProducto(producto) {
  const fila = document.createElement('tr'); // Defino la línea

  const celdas = ['id', 'nombre', 'descripcion', 'precio'];

  for (const propiedad of celdas) {
    const celda = document.createElement('td'); // Defino la celda
    celda.textContent = producto[propiedad];
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

// Cargamos los productos
cargarProductos();

// Crear el objeto nuevo para agregar el producto
class NuevoProducto {
  constructor(nombre, descripcion, precio) {
    this.id = productos.length + 1; // Obtén el ID secuencial sumando 1 al último ID existente
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

// Muestra el arreglo de productos actualizado
console.log(productos); 


/* Aclaraciones

El appendChild me lo suma al final de todos los objetos
append nos permite agregar varios hijos a la vez

let ham1 = ""
let ham2 = ""
let ham3 = ""

document.querySelector('Clase o ID').append(ham1, ham2, ham3);


*/

