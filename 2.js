let medios = ["Pie", "Bicicleta", "Colectivo", "Auto", "Avión"];
let distancia = 3000;
let medioRecomendado = "Error";

if (distancia < 1000) {
  medioRecomendado = medios[0];
} else if (distancia < 10000) {
  medioRecomendado = medios[1];
} else if (distancia < 30000) {
  medioRecomendado = medios[2];
} else if (distancia < 100000) {
  medioRecomendado = medios[3];
} else {
  medioRecomendado = medios[4];
}

console.log(
  `Para la distancia de ${distancia} metros es recomendado ir en ${medioRecomendado}`
);
