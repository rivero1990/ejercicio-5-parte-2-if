const CANT_MAX_MASCOTAS = 3;
const CANT_MAX_GATOS = 1;
const CANT_MAX_PERROS = CANT_MAX_MASCOTAS;
const CANT_POR_DEF = 0;
const PASEO_TIEMPO_MAX = 60;
const PASEO_TIEMPO_MIN = 30;

let consultaMascota = prompt("Quiere pasear perros o un gato?");
let cantDeTiempo = prompt("Cuanto minutos le gustaria pasear a su mascota?");
let numDeMascotas = prompt("Ingrese la cantidad de mascotas");
let opcionUno = "perros";
let opcionDos = "gato";

if ((consultaMascota == opcionUno) && (numDeMascotas <= CANT_MAX_PERROS) && (numDeMascotas > CANT_POR_DEF)) {
      if ((cantDeTiempo >= PASEO_TIEMPO_MIN) && (cantDeTiempo <= PASEO_TIEMPO_MAX))
      document.write("Pedido confirmado : el paseador llegara en 20 minutos");
} else if ((consultaMascota == opcionDos) && (numDeMascotas == CANT_MAX_GATOS) && (numDeMascotas > CANT_POR_DEF)) {
      if ((cantDeTiempo >= PASEO_TIEMPO_MIN) && (cantDeTiempo <= PASEO_TIEMPO_MAX))
      document.write("Pedido confirmado : el paseador llegara en 20 minutos");
}
  
 else {
      document.write("Cantidad de mascotas o tiempo de paseo invalido : intente nuevamente");
}