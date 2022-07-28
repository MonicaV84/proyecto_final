//################### FORMULARIO DE CONFIRMACIÓN ############################

const precios = [19934, 46641, 35777, 30198, 68945, 15441, 33287, 11633, 23564];
let formulario = document.querySelector(".form-confirm")

formulario.addEventListener("submit", getInfo);

function getInfo(e) {
  e.preventDefault();
  let destino = document.getElementById("destinoid").value;
  let pasajeros = document.getElementById("pasajerosid").value;
  let subtotal = document.getElementById("subtotalid");
  let total = document.getElementById("totalid");

  if (destino.toLowerCase() === "mendoza") {
    subtotal.textContent = `El total por persona es $ ${precios[0]}`;
    total.textContent = `El total de su compra es $ ${precios[0] * parseInt(pasajeros)}`
  }
  if (destino.toLowerCase() === "san juan") {
    subtotal.textContent = `El total por persona es $ ${precios[1]}`;
    total.textContent = `El total de su compra es $ ${precios[1] * parseInt(pasajeros)}`
  }
  if (destino.toLowerCase() == "tilcara") {
    subtotal.textContent = `El total por persona es $ ${precios[2]}`;
    total.textContent = `El total de su compra es $ ${precios[2] * parseInt(pasajeros)}`
  }
  if (destino.toLowerCase() == "esteros del ibera" || destino.toLowerCase() == "esteros del iberá") {
    subtotal.textContent = `El total por persona es $ ${precios[3]}`;
    total.textContent = `El total de su compra es $ ${precios[3] * parseInt(pasajeros)}`
  }
  if (destino.toLowerCase() == "bariloche") {
    subtotal.textContent = `El total por persona es $ ${precios[4]}`;
    total.textContent = `El total de su compra es $ ${precios[4] * parseInt(pasajeros)}`
  }
  if (destino.toLowerCase() == "carlos paz") {
    subtotal.textContent = `El total por persona es $ ${precios[5]}`;
    total.textContent = `El total de su compra es $ ${precios[5] * parseInt(pasajeros)}`
  }
  if (destino.toLowerCase() == "catamarca") {
    subtotal.textContent = `El total por persona es $ ${precios[6]}`;
    total.textContent = `El total de su compra es $ ${precios[6] * parseInt(pasajeros)}`
  }
  if (destino.toLowerCase() == "mar del plata") {
    subtotal.textContent = `El total por persona es $ ${precios[7]}`;
    total.textContent = `El total de su compra es $ ${precios[7] * parseInt(pasajeros)}`
  }
  if (destino.toLowerCase() == "rio cuarto" || destino.toLowerCase() == "río cuarto") {
    subtotal.textContent = `El total por persona es $ ${precios[8]}`;
    total.textContent = `El total de su compra es $ ${precios[8] * parseInt(pasajeros)}`
  }
}

