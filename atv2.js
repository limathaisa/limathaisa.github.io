function marcarVogais() {
    let frase = document.getElementById('frase').value;
    
    
    let resultado = frase.replace(/[aeiouáéíóúãõâêîôûàèìòù]/gi, function(vogal) {
        return `<span class="negrito">${vogal}</span>`;
    });
    document.getElementById('resultado').innerHTML = resultado;
}
