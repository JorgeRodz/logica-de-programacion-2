function convertirTemperatura() {
  let valido = false;
  let temperatura;

  while (!valido) {
    let entrada = prompt("Ingrese la temperatura en grados Celsius:");

    if (!isNaN(entrada) && entrada.trim() !== "") {
      temperatura = Number(entrada);
      valido = true;
    } else {
      alert("⚠️ Error: Debe ingresar un número.");
    }
  }

  let kelvin = temperatura + 273.15;
  let fahrenheit = (temperatura * 9 / 5) + 32;

  console.log("Grados Kelvin: " + kelvin.toFixed(2));
  console.log("Grados Fahrenheit: " + fahrenheit.toFixed(2));

  document.body.innerHTML = `
    <h1>Conversor de Temperaturas</h1>
    <p>Temperatura ingresada: ${temperatura} °C</p>
    <p>-------------------------------------------------------------</p>
    <h2>Resultados</h2>
    <p>Grados Kelvin: ${kelvin.toFixed(2)}</p>
    <p>Grados Fahrenheit: ${fahrenheit.toFixed(2)}</p>
  `;
}

// Ejecutar programa
convertirTemperatura();
