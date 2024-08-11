import { desviacioEstandar, ElevarAl2, promedio, restarPromedio, sumarConjunto } from "./services/calculos.js";


export function main() {
    let datos = document.getElementById('inputData').value.trim();
    
    if (/,,/.test(datos)) {
        alert('Hay comas consecutivas. Por favor, no deje campos vacíos.');
        return;
    }
    
    if (!datos) {
        alert('Por favor, ingrese los valores separados por comas.');
        return;
    }

    let conjunto = datos.split(",").map(Number);

  
    if (conjunto.some(isNaN)) {
        alert('Por favor ingrese numeros validos, deben estar separados por comas.');
        return;
    }

    let sumaconjuntoOriginal = sumarConjunto(conjunto);
    let promedios = promedio(conjunto);
    let desviacion = restarPromedio(conjunto, promedios);
    let desviacionA2 = ElevarAl2(desviacion);
    let sumaDesviacionA2 = sumarConjunto(desviacionA2);
    let DesviacionEstandar = desviacioEstandar(conjunto);


    document.getElementById('promedioResult').querySelector('.result-value').innerText = promedios;
    document.getElementById('desviacionEstandarResult').querySelector('.result-value').innerText = DesviacionEstandar;



    let tbody = document.querySelector("#dataTable tbody");
    tbody.innerHTML = ""; 

    for (let i = 0; i < conjunto.length; i++) {
        let tr = document.createElement("tr");
        tr.innerHTML = `
                    <td>${conjunto[i]}</td>
                    <td>${desviacion[i]}</td>
                    <td>${desviacionA2[i]}</td>
                `;
        tbody.appendChild(tr);
    }


    document.getElementById('totalConjunto').innerText = sumaconjuntoOriginal;
    document.getElementById('totalDesviacionA2').innerText = sumaDesviacionA2;
}

document.getElementById('calculateButton').addEventListener('click', main);