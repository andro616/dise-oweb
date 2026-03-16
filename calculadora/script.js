document.querySelector('button').addEventListener('click', Calcular);

function Calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        alert('Ingresa ambos números');
        return;
    }

    const suma = num1 + num2;
    const resta = num1 - num2;
    const multiplicacion = num1 * num2;
    const division = num2 === 0 ? 'Error: división por cero' : (num1 / num2).toFixed(2);

    document.getElementById('suma').textContent = `Suma: ${suma}`;
    document.getElementById('resta').textContent = `Resta: ${resta}`;
    document.getElementById('multiplicacion').textContent = `Multiplicación: ${multiplicacion}`;
    document.getElementById('division').textContent = `División: ${division}`;

    document.getElementById('resultado').style.display = 'block';
}   

