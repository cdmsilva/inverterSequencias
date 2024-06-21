function inverter() {
    let palavra = document.getElementById('caracter').value;
    let caracter = palavra.split('').reverse().join('');

    document.getElementById('res').innerText = "Sequência Invertida: " + caracter;
}