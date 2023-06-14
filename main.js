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


function filterProduct(value){
  if (!value) { newArray = [...products] ; 
  
    showgallery(newArray)
  }
  
  else {newArray = products.filter(item => item.category === value);
 showgallery(newArray)}
}

document.getElementById("myinput").addEventListener("keyup", function(){
  let text = document.getElementById("myinput").value.toLowerCase();
  
  let filterarray = products.filter(function(a){
    return a.name.toLowerCase().startsWith(text);
  });
  
  if (this.value == "") {
    showgallery(products);
    document.getElementById("para").style.display = "none";
  } else {
    if (filterarray.length === 0) {
      document.getElementById("para").style.display = "block";
      document.getElementById("card").innerHTML = "";
    } else {
      showgallery(filterarray);
      document.getElementById("para").style.display = "none";
    }
  }
});







