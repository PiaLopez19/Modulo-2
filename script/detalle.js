let miCarrito = [];
const womenShort = document.querySelector('#short-gris');
let countCard = 0;

const product = galeryarray[0];

let card = document.createElement('div');
card.classList.add("divtext");
let card2 = document.createElement('div');
card2.classList.add("divImg");
let item2 = `<img class="remeraImg mx-auto d-block my-3" src="${product.src}" alt="${product.name}">`;
let item = `
  <h3 class= "pt-5">${product.name}</h3>
  <p class="pt-3">$${product.price}</p> <hr>
  <p class="pt-3">ID:${product.id}</p> <hr>
  <p class="pt-3 text-center">${product.decription}</p>
  <button class="agregar-carrito my-3 w-75  btn btn-danger border border-black" id="${product.name}" onclick="addCard()">Agregar al Carrito</button> 
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

    modalContenido.innerHTML = `
      <h2> ${product.name} </h2>  <hr>
      <p class="text-center">$${product.price}</p>  <hr>
      <img class="center-block remeraImg mx-auto d-block" src="${product.img}" alt="${product.name}">  <hr>
      <p class="text-center">ID:${product.id}</p>
    `;

    modalBody.append(modalContenido);
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

// abrir el modal al hacer clic en "Agregar al Carrito"
let verCarrito = document.querySelector(".agregar-carrito");
verCarrito.addEventListener("click", showCar);






/* //------------------------------PARA AGREGAR CARRITO CON BOTON-------------------------------

const frutsSection = document.querySelector('#fruts');
let countCard = 0 //esto es para hacer un contador que este en 0

function addCard(event) {
    let itemCards = document.querySelector('#card') //con esto agarro el 0 que esta en el HTML
    countCard = countCard + 1 //con esto aumento el numero de mi cero
    itemCards.innerText = countCard //ahi estoy agarrando el 0 con item card, cambiando el texto con inner text y diciendo que es igual a count card para que se vaya sumando
}

fruts.forEach(function (frut) {
    let card = document.createElement('div')
    let item = `
    <p>${frut.url}</p>
    <p>${frut.name}</p>
    <p>${frut.price}</p>
    <button id=${frut.name} onclick="addCard(event)" >Comprar</button> 
    `; //en lo que seria el button es donde agrego el evento que se llama on click y le agrego la funcion que cree arriba y le agrego parentisis para inicializar la funcion

    card.innerHTML = item
    frutsSection.appendChild(card)
}) */