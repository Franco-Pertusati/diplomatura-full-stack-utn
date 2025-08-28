// EJERCIO 1
const ejercicio1Btn = document.getElementById("ejercicio1Btn");
ejercicio1Btn.addEventListener("click", calcPromedio);

function calcPromedio() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);

  const promedioSpan = document.getElementById("promedioSpan");

  if (nota1 < 0 || nota2 < 0) {
    promedioSpan.textContent = `Las notas tienen que ser mayor o igual a 0.`;
    return;
  }

  const promedio = (nota1 + nota2) / 2;
  promedioSpan.textContent = `El promedio del año es: ${promedio}`;
}

// EJERCICIO 2

const textArea = document.getElementById("textAreaEj2");
textArea.addEventListener("input", actualizarContador);

function actualizarContador() {
  var exesoDeChar = false;
  const largoDeTexto = textArea.value.length;
  const contadorSpan = document.getElementById("contadorSpan");

  contadorSpan.textContent = `Deja un comentario - ${largoDeTexto}/32`;

  if (largoDeTexto > 32) {
    textArea.classList.add("error")
  } else {
    textArea.classList.remove("error")
  }
}
