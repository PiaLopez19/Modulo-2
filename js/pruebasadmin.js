/********************* BOTON DE EDITAR PRODUCTO ******************/

function editarFilaProducto(id, nombre, descripcion, precio) {

    productos = productos.find(function(producto) {
      const idProducto = document.getElementById('id-producto').value = id;
      const nombreProducto = document.getElementById('nombre-producto').value = nombre;
      const detalleProducto = document.getElementById('detalle-producto').value = descripcion;
      const precioProducto = document.getElementById('precio-producto').value = precio;
    });
  }

  
  function guardarCambiosProducto() {
    const idProducto = document.getElementById('id-producto').value;
    const nombreProducto = document.getElementById('nombre-producto').value;
    const detalleProducto = document.getElementById('detalle-producto').value;
    const precioProducto = document.getElementById('precio-producto').value;
  
    if (idProducto && nombreProducto && detalleProducto && precioProducto) {
      const productoExistente = productos.find(function(producto) {
        return producto.id === parseInt(idProducto);
      });
  
      if (productoExistente) {
        productoExistente.id = parseInt(idProducto);
        productoExistente.nombre = nombreProducto;
        productoExistente.descripcion = detalleProducto;
        productoExistente.precio = precioProducto;
        cargarProductos();
  
        alert('Cambios guardados con exito')
  
        document.getElementById('id-producto').value = '';
        document.getElementById('nombre-producto').value = '';
        document.getElementById('detalle-producto').value = '';
        document.getElementById('precio-producto').value = '';
  
        const botonGuardar = document.querySelector('#agregar-producto');
        botonGuardar.textContent = 'Agregar producto';
        botonGuardar.removeEventListener('click', guardarCambiosProducto);
        botonGuardar.addEventListener('click', crearNuevoProducto);
      }
    } else {
      alert('Por favor, ingrese todos los datos del producto');
    }
  }