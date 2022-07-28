
// ########### Llena las cards ##############

const products = [
  {
    "picture": "images/mendoza.jpg",
    "destino": "Mendoza",
    "duracion": "6 días 3 noches",
    "precio": 19934,
    "dias": 6
  },

  {
    "picture": "images/sanjuan.jpg",
    "destino": "San Juan",
    "duracion": "9 días 6 noches",
    "precio": 46641,
    "dias": 9
  },
  {
    "picture": "images/tilcara.jpg",
    "destino": "Tilcara",
    "duracion": "8 días 5 noches",
    "precio": 35777,
    "dias": 8
  },

  {
    "picture": "images/esteros.jpg",
    "destino": "Esteros del Iberá",
    "duracion": "7 días 4 noches",
    "precio": 30198,
    "dias": 7
  },
  {
    "picture": "images/bariloche.jpg",
    "destino": "Brariloche",
    "duracion": "5 días 4 noches",
    "precio": 68945,
    "dias": 5
  },
  {
    "picture": "images/carlospaz.jpg",
    "destino": "Carlos Paz",
    "duracion": "5 días 4 noches",
    "precio": 15441,
    "dias": 5
  },
  {
    "picture": "images/catamarca.jpg",
    "destino": "Catamarca",
    "duracion": "6 días 3 noches",
    "precio": 33287,
    "dias": 6
  },
  {
    "picture": "images/mardelplata.jpg",
    "destino": "Mar del Plata",
    "duracion": "3 dias 2 noches",
    "precio": 11633,
    "dias": 3
  },
  {
    "picture": "images/riocuarto.jpg",
    "destino": "Río Cuarto",
    "duracion": "7 días 4 noches",
    "precio": 23564,
    "dias": 7
  }

];

function cardTemplate(products) {
  return `
<div class="card" id="card">
        <img src="${products.picture}" alt="${products.destino}">
        <div class="card-info">
          <p class="destino">${products.destino}</p>
          <p class="duracion">${products.duracion}</p>
          <p class="precio">$ ${products.precio}</p>
          <p class="legal">+ tasas e impuestos</p>
           <form>
            <button formaction="reservas.html" type="" class="btn" id="card-btn">Reservar</button>
          </form>

        </div>
      </div>
`
}

document.getElementById("card-container").innerHTML = `${products.map(cardTemplate).join('')}`


//########################## SLIDERS Y FILTROS ###########################



let sliderPrice = document.getElementById("price-slider");
let outputPrecio = document.getElementById("precioid");
let sliderDia = document.getElementById("day-slider");
let outputDia = document.getElementById("diasid");



outputPrecio.innerHTML = `$ ${sliderPrice.value}`;
let preciosFiltrados;
sliderPrice.oninput = function() {
  outputPrecio.innerHTML = `$ ${this.value}`;
  preciosFiltrados = products.filter(x => x.precio <= this.value);
  console.log(preciosFiltrados);
  document.getElementById("card-container").innerHTML = `${preciosFiltrados.map(cardTemplate).join('')}`
}


outputDia.innerHTML = `${sliderDia.value} días`;

sliderDia.oninput = function() {
  outputDia.innerHTML = `${this.value} días`;
  console.log(this.value)
  const diasFiltrados = preciosFiltrados.filter(x => x.dias <= this.value);
  console.log(diasFiltrados);
  document.getElementById("card-container").innerHTML = `${diasFiltrados.map(cardTemplate).join('')}`
}


// ##################################### BOTONES FORMULARIO ######################################//

let formBtnCancel = document.getElementById("form-button-cancel");
let formBtnSend = document.getElementById("form-button-send");

formBtnCancel.addEventListener("click", onclick);

function onclick(formBtnCancel) {
  window.alert("Mensaje cancelado");
}


formBtnSend.addEventListener("click", sendMsg);

function sendMsg(formBtnSend) {
  window.alert("Mensaje enviado")
}



