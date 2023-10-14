//Escribe un Programa que responda a un Usuario que quiere comprar un helado,
//en una conocida marca de comida rapida, cuanto le costara en funcion,
// del topping que elija???

// - El helado sin topping cuesta 1900 pesos.
// - El topping de Oreo cuesta 1000 pesos.
// - El topping de Kitkat cuesta 1500. 
// - El topping de Brownie cuesta 750. 
// - El topping de Lacasitos cuesta 950.

// En caso de no disponer del topping solicitado por el usuario, 
// el programa escribira por pantalla "No tenemos ese topping, lo sentimos". 
// Y a Continuacion informar el precio del helado sin ningun topping 

let helado = prompt("Que tipo de topping quieres?");
function toppins(helado) {
  if (helado === "oreo") {
    console.log("El Topping de Oreo tiene un Costo de 1000");
  } else if (helado === "kitkat") {
    console.log("El Toping de Kitkat tiene un costo de 1500");
  } else if (helado === "brownie") {
    console.log("El Topping de Brownie tiene un costo de 750");
  } else if (helado === "lacasitos") {
    console.log("El Topping de lacasitos tiene un costo de 950");
  } else {
    console.log("Sin Topping tiene un costo de 1900");
  }
}
toppins(helado);
