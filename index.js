const resultZoneAnswer = document.getElementById('results-zone-answer');
let encriptado = false;
let desencriptado = false;
let mostrarLateral = false;
if (mostrarLateral === false) {
    resultZoneAnswer.style.display = 'none'
}

const obtenerTextoH2 = () => {
    const h2Element = document.getElementById('textoCopiar');
    return h2Element.innerText;
}

const mostrarValor = () => {
    const text = document.getElementById('text')
    const value = text.value
    return value
}

const encriptar = () => {
    let valorEncriptar;
    if (encriptado === false && desencriptado === false) {
        valorEncriptar = mostrarValor();
    } else if (desencriptado === true) {
        valorEncriptar = obtenerTextoH2();
    }
    let encriptacion = "";

    for (let i = 0; i < valorEncriptar.length; i++) {
        if (valorEncriptar[i] === "e") {
            encriptacion += "enter";
        } else if (valorEncriptar[i] === "i") {
            encriptacion += "imes";
        } else if (valorEncriptar[i] === "a") {
            encriptacion += "ai";
        } else if (valorEncriptar[i] === "o") {
            encriptacion += "ober";
        } else if (valorEncriptar[i] === "u") {
            encriptacion += "ufat";
        } else {
            encriptacion += valorEncriptar[i];
        }
    }

    encriptado = true
    mostrarRespuesta(encriptacion);
    return encriptacion;
};

const desencriptar = () => {
    let valorDesencriptar;
    if (encriptado === true) {
        valorDesencriptar = obtenerTextoH2()
    } else if (encriptado === false) {
        valorDesencriptar = mostrarValor();
    }

    let valorDesencriptarArrray = valorDesencriptar.split('');

    for (let i = 0; i < valorDesencriptarArrray.length; i++) {
        if (valorDesencriptarArrray[i] === "e") {
            valorDesencriptarArrray.splice(i + 1, 4);
        } else if (valorDesencriptarArrray[i] === "i") {
            valorDesencriptarArrray.splice(i + 1, 3);
        } else if (valorDesencriptarArrray[i] === "a") {
            valorDesencriptarArrray.splice(i + 1, 1);
        } else if (valorDesencriptarArrray[i] === "o") {
            valorDesencriptarArrray.splice(i + 1, 3);
        } else if (valorDesencriptarArrray[i] === "u") {
            valorDesencriptarArrray.splice(i + 1, 3);
        }
    }

    desencriptado = true
    let textoDesencriptado = valorDesencriptarArrray.join("").replace(",", "")
    mostrarRespuesta(textoDesencriptado);
    return textoDesencriptado;
};

const mostrarRespuesta = (texto) => {
    let resultsZone = document.getElementById('results-zone')
    let resultsZoneAnswer = document.getElementById('results-zone-answer')
    if (mostrarLateral === false) {
        resultsZone.style.display = 'none';
        resultsZoneAnswer.style.display = 'flex'
        resultsZoneAnswer.innerHTML = `<h2 id="textoCopiar">${texto}</h2> <button onclick="copiarTexto()" >Copy</button>`
    }
}

const copiarTexto = () => {
    const h2Texto = document.getElementById('textoCopiar');

    // Crear un elemento de entrada de texto temporal
    const inputTemporal = document.createElement('input');
    inputTemporal.value = h2Texto.innerText;

    // Agregar el elemento al DOM
    document.body.appendChild(inputTemporal);

    // Seleccionar y copiar el contenido del elemento temporal
    inputTemporal.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal del DOM
    document.body.removeChild(inputTemporal);
}