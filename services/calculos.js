
export function sumarConjunto(conjunto) {
    let suma = 0;
    for (let i = 0; i < conjunto.length; i++) {
        suma += conjunto[i];
    }
    return parseFloat(suma.toFixed(4)); 
}

export function promedio(conjunto) {
    let suma = 0;
    for (let i = 0; i < conjunto.length; i++) {
        suma += conjunto[i];
    }
    let promedio = suma / conjunto.length;
    return parseFloat(promedio.toFixed(4)); 
}

export function restarPromedio(conjunto, promedio) {
    let nuevoConjunto = [];
    for (let i = 0; i < conjunto.length; i++) {
        let nuevoValor = conjunto[i] - promedio;
        nuevoConjunto.push(parseFloat(nuevoValor.toFixed(4)));
    }
    return nuevoConjunto;
}

export function ElevarAl2(conjunto) {
    let nuevoConjunto = [];
    for (let i = 0; i < conjunto.length; i++) {
        let nuevoValor = conjunto[i] ** 2;
        nuevoConjunto.push(parseFloat(nuevoValor.toFixed(4))); 
    }
    return nuevoConjunto;
}

export function desviacioEstandar(conjuntoOriginal) {
    let promedios = promedio(conjuntoOriginal);
    let desviacion = restarPromedio(conjuntoOriginal, promedios);
    let desviacionA2 = ElevarAl2(desviacion);
    let sumaDesviacionA2 = sumarConjunto(desviacionA2);
    let calculo1 = (1 / (conjuntoOriginal.length - 1)) * sumaDesviacionA2;
    let calculo1Aproximado = parseFloat(calculo1.toFixed(4)); 
    let calculo2 = Math.sqrt(calculo1Aproximado);
    return parseFloat(calculo2.toFixed(2)); 
}
