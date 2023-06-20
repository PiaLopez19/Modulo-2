let miCarrito = [];
const womenShort = document.querySelector('#short-gris');
let countCard = 0;

const product = galeryarray[0];

let card = document.createElement('div');
card.classList.add("divtext");
let card2 = document.createElement('div');
card2.classList.add("divImg");
let item2 = `<img class=" remeraImg mx-auto d-block my-3" src="${product.src}" alt="${product.name}">`;
let item = `
  <h3 class= "mx-3 text-start pt-5">${product.name}</h3>
  <p class="pt-3 text-start mx-3">$${product.price}</p> <hr>
  <p class="pt-3 text-start mx-3">ID:${product.id}</p> <hr>
  <p class="py-3 px-5 text-start mx-3 ">${product.decription}</p>
  <p class="pt-3 text-center fw-bold text-start mx-3">*${product.stock}</p>
  <button class="agregar-carrito my-3 w-75 mb-5 btn btn-danger border border-black" id="${product.name}" onclick="addCard()">Agregar al Carrito</button> 
`;
card.innerHTML = item;
card2.innerHTML = item2;
womenShort.append(card2, card);

function addCard() {
  miCarrito.push({
    img: product.src,
    name: product.name,
    id: product.id,
    price: product.price
  });
  countCard = miCarrito.length; // actualizar el contador con la longitud del carrito
  let itemCards = document.querySelector('#card');
  itemCards.innerText = countCard;

  // Guardar en LocalStorage
  localStorage.setItem("car", JSON.stringify(miCarrito));
}

const showCar = () => {
  let modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = ""; // limpiar contenido anterior

  for (let i = 0; i < miCarrito.length; i++) {
    let product = miCarrito[i];
    let modalContenido = document.createElement("div");
    modalContenido.classList.add('contenidoModal')
    modalContenido.innerHTML = `
      <h3> ${product.name} </h3>  <hr>
      <p class="text-center">$${product.price}</p>  <hr>
      <img class="center-block remeraImg mx-auto d-block" src="${product.img}" alt="${product.name}">  <hr>
      <p class="text-center">ID:${product.id}</p>
    `;

    modalBody.append(modalContenido);

    let eliminar = document.createElement('span')
    eliminar.innerText = '❌'
    eliminar.className = 'eliminar-product'
    modalContenido.appendChild(eliminar)
    eliminar.addEventListener('click', eliminarProducto)
  }
};

// mostrar el carrito al cargar la pag
window.onload = () => {
  if (localStorage.getItem("car")) {
    miCarrito = JSON.parse(localStorage.getItem("car"));
    countCard = miCarrito.length; // obtener la longitud del carrito
    let itemCards = document.querySelector('#card');
    itemCards.innerText = countCard; // actualizar el contador en el HTML
    showCar();
  }
};

// asbrir el modal al hacer clic en "Agregar al Carrito"
let verCarrito = document.querySelector(".agregar-carrito");
verCarrito.addEventListener("click", showCar);

const eliminarProducto = () =>{
  const foundId = miCarrito.find ((element)=> element.id)
  miCarrito = miCarrito.filter((carritoId) =>{
    return carritoId !== foundId
  })
  showCar()
  localStorage.setItem("car", JSON.stringify(miCarrito));
}
