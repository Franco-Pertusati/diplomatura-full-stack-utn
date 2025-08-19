const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
valorMaximo = 0;

for (let i = 0; i < numeros.length; i++) {

  if (numeros[i] > valorMaximo) {
    valorFinal = numeros[i];
  }
}

console.log(`El numero mas alto es: ${valorFinal}`);
