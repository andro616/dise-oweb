
document.getElementById('btnCalcular').addEventListener('click', calcular);

function calcular() {
    
    const edad = parseFloat(document.getElementById('edad').value);
    const presion = parseFloat(document.getElementById('presion').value);
    const colesterol = parseFloat(document.getElementById('colesterol').value); 
    const fumador = document.getElementById('fumador').value; 

    const resultadoDiv = document.getElementById('resultado');
    const textoResultado = document.getElementById('textoResultado');


    if (isNaN(edad) || isNaN(presion) || isNaN(colesterol) || fumador === "") {
        textoResultado.textContent = "Por favor, completa todos los campos correctamente.";
        return;
    }

    let puntos = 0;

   
    if (edad >= 35 && edad <= 44) puntos += 1;
    else if (edad >= 45) puntos += 2;

    if (presion >= 120 && presion < 140) puntos += 1;
    else if (presion >= 140) puntos += 3;

    if (colesterol >= 200 && colesterol < 240) puntos += 1; 
    else if (colesterol >= 240) puntos += 3;

    if (fumador === 'si') puntos += 3;

    
    let mensaje = "";
    let colorFondo = "";

    if (puntos <= 2) {
        mensaje = "Riesgo Bajo";
        colorFondo = "#2ecc71";
    } else if (puntos <= 5) {
        mensaje = "Riesgo Moderado";
        colorFondo = "#f1c40f"; 
    } else {
        mensaje = "Riesgo Alto";
        colorFondo = "#e74c3c"; 
    }

   
    textoResultado.textContent = `Puntos: ${puntos} - ${mensaje}`;
    resultadoDiv.style.background = colorFondo;
    resultadoDiv.style.borderRadius = "20px";
    resultadoDiv.style.padding = "10px";
    resultadoDiv.style.margin = "20px";
    textoResultado.style.color = (puntos > 2 && puntos <= 5) ? "black" : "white";
}


document.getElementById('btnLimpiar').addEventListener('click', () => {
    document.getElementById('edad').value = "";
    document.getElementById('presion').value = "";
    document.getElementById('colesterol').value = "";
    document.getElementById('fumador').value = "";
    document.getElementById('textoResultado').textContent = "";
    document.getElementById('resultado').style.background = "none";
});
