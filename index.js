let onResponse = false;
const resultZoneAnswer = document.getElementById('results-zone-answer')

if (onResponse === false) {
    resultZoneAnswer.style.display = 'none'
}

const mostrarValor = () => {
    const text = document.getElementById('text')
    const value = text.value
    return value
}

const encriptar = () => {
    let text = mostrarValor();
    let encriptado = "";

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "e") {
            encriptado += "enter";
        } else if (text[i] === "i") {
            encriptado += "imes";
        } else if (text[i] === "a") {
            encriptado += "ai";
        } else if (text[i] === "o") {
            encriptado += "ober";
        } else if (text[i] === "u") {
            encriptado += "ufat";
        } else {
            encriptado += text[i];
        }
    }

    mostrarRespuesta(encriptado);
    return encriptado;
};

const desencriptar = () => {
    let text = [...encriptar()];

    for (let i = 0; i < text.length; i++) {
        if (text[i] === "e") {
            text.splice(i + 1, 4);
        } else if (text[i] === "i") {
            text.splice(i + 1, 3);
        } else if (text[i] === "a") {
            text.splice(i + 1, 1);
        } else if (text[i] === "o") {
            text.splice(i + 1, 3);
        } else if (text[i] === "u") {
            text.splice(i + 1, 3);
        }
    }

    let textoDesencriptado = text.join("").replace(",", "")
    mostrarRespuesta(textoDesencriptado);
    return textoDesencriptado;
};

const mostrarRespuesta = (texto) => {

    let resultsZone = document.getElementById('results-zone')
    let resultsZoneAnswer = document.getElementById('results-zone-answer')
    if (onResponse === false) {
        resultsZone.style.display = 'none';
        resultsZoneAnswer.style.display = 'flex'
        resultsZoneAnswer.innerHTML = `<h2 id="textoCopiar">${texto}</h2> <button onclick="copiarTexto()" >Copy</button>`
    }
}

const copiarTexto = () => {
    // let h2Texto = document.getElementById('textoCopiar');
    // h2Texto.select();
    // document.execCommand("copy");

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