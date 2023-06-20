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
  botonEditar.innerHTML = `<button 
  id="editar-producto" 
  class="rounded botones-admin"
  data-bs-toggle="modal" 
  data-bs-target="#exampleModal">Editar</button>`;
  fila.appendChild(botonEditar)
  botonEditar.addEventListener('click', function() {
    editarFilaProducto(producto.id, producto.nombre, producto.descripcion, producto.precio);
  })

  let botonBorrar = document.createElement('td');
  botonBorrar.innerHTML = '<button class="rounded botones-admin">Borrar</button>';
  fila.appendChild(botonBorrar)
  botonBorrar.addEventListener('click', function() {
    borrarFilaProducto(producto.id);
  })

  return fila;
}

/******************** CARGAR LAS FILAS *****************/

function cargarProductos() {
  let tableBody = document.querySelector('#productos-table tbody');
  tableBody.innerHTML = '';

  productos.forEach(function(producto) {
    let fila = generarFilaProducto(producto);
    tableBody.appendChild(fila);
  });
}

cargarProductos();

/******************** EDITAR PRODUCTOS *****************/

function editarFilaProducto(id, nombre, descripcion, precio) {
  document.getElementById('id-producto').value = id;
  document.getElementById('nombre-producto').value = nombre;
  document.getElementById('detalle-producto').value = descripcion;
  document.getElementById('precio-producto').value = precio;

  const botonGuardar = document.querySelector('#agregar-producto');
  botonGuardar.textContent = 'Guardar cambios';
  botonGuardar.removeEventListener('click', crearNuevoProducto);
  botonGuardar.addEventListener('click', guardarEditProducto);
}

function guardarEditProducto() {

  const idProducto = document.getElementById('id-producto').value;

  let productoEditado = productos.find(function(producto) {
    return producto.id === parseInt(idProducto);
  });

  const nombreProducto = document.getElementById('nombre-producto').value;
  const detalleProducto = document.getElementById('detalle-producto').value;
  const precioProducto = document.getElementById('precio-producto').value;

  productoEditado.nombre = nombreProducto;
  productoEditado.descripcion = detalleProducto;
  productoEditado.precio = precioProducto;

  cargarProductos();

  alert('Cambios realizados correctamente')

  document.getElementById('id-producto').value = '';
  document.getElementById('nombre-producto').value = '';
  document.getElementById('detalle-producto').value = '';
  document.getElementById('precio-producto').value = '';

  const botonGuardar = document.querySelector('#agregar-producto');
  botonGuardar.textContent = 'Agregar producto';
  botonGuardar.removeEventListener('click', guardarEditProducto);
  botonGuardar.addEventListener('click', crearNuevoProducto);

}

/********************* FUNCION DE BORRAR PRODUCTO ******************/

function borrarFilaProducto(id) {
  let confirmacion = confirm('¿Estas seguro de que quieres borrar este producto?')

  if(confirmacion) {
    productos = productos.filter(function(producto) {
      return producto.id !== id;
    });
    cargarProductos();
  } else {
    return;
  }
}

/******************** CREAR OBJETO NUEVO PRODUCTO *****************/

class NuevoProducto {
  constructor(id, nombre, descripcion, precio) {
    this.id = parseInt(id, 10);
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

/******************** CREAR VISUALMENTE NUEVO PRODUCTO *****************/

function crearNuevoProducto(event) {

  event.preventDefault();

  const idProducto = document.getElementById('id-producto').value;
  const nombreProducto = document.getElementById('nombre-producto').value;
  const detalleProducto = document.getElementById('detalle-producto').value;
  const precioProducto = document.getElementById('precio-producto').value;

  if (idProducto && nombreProducto && detalleProducto && precioProducto) {
    const productoCreado = new NuevoProducto(idProducto, nombreProducto, detalleProducto, precioProducto);
    productoCreado.crearProducto();
    cargarProductos();

    document.getElementById('id-producto').value = '';
    document.getElementById('nombre-producto').value = '';
    document.getElementById('detalle-producto').value = '';
    document.getElementById('precio-producto').value = '';

    alert('Producto nuevo cargado con exito')
  } 
  else {
    alert('Por favor, ingrese todos los datos del producto');
  }
}

/******************** GUARDAR NUEVO PRODUCTO *****************/

function guardarNuevoProducto() {
  const botonAgregar = document.querySelector('#agregar-producto');
  botonAgregar.addEventListener('click', crearNuevoProducto);
}

guardarNuevoProducto();


/******************** VENTAS MENSUALES *******************/

const ventasMensuales = [15000, 12000, 32000, 19000, 14000, 32000, 22000, 9000];

const canvasVentas = document.getElementById('chart-ventas');

const chartVentas = new Chart(canvasVentas, {
  type: 'bar',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'],
    datasets: [{
      label: 'Ventas Mensuales',
      data: ventasMensuales,
      backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

/******************** VISITAS *******************/

const visitas = [
  { etiqueta: 'Directo', visitas: 500 },
  { etiqueta: 'Redes Sociales', visitas: 200 },
  { etiqueta: 'Búsqueda', visitas: 300 },
  { etiqueta: 'Referencias', visitas: 150 }
];

const canvasVisitas = document.getElementById('chart-visitas');

const chart = new Chart(canvasVisitas, {
  type: 'pie',
  data: {
    labels: visitas.map(visita => visita.etiqueta),
    datasets: [{
      data: visitas.map(visita => visita.visitas),
      backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(255, 206, 86, 0.6)'],
    }]
  }
});
