let filterarray = []
let newArray = [...products] 

//creamos una funcion para mostrar la galeria

showgallery(products)

function showgallery(curarray){
    document.getElementById("card").innerText = "" ;

for (var i= 0; i< curarray.length; i++) {
    document.getElementById("card").innerHTML += `
    <div class="col-lg-4 text-center mb-2 mt-5">
          <div class="card border-0 bg-light">
            <div class="card-body">
              <img src="${curarray[i].src}"  class="img-fluid object-fit-cover h-100 w-100" alt="${curarray[i].id}">
            </div>
          </div>
          <h6>${curarray[i].name}</h6>
          <p>${curarray[i].price}</p>
        </div>
    `    
}
}




