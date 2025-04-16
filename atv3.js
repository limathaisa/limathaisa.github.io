function contarPalavras() {
    var texto = document.getElementById('texto').value;

    var textoMinusculo = "";
    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            textoMinusculo += String.fromCharCode(charCode + 32);
        } else {
            textoMinusculo += texto[i];
        }
    }

    var pontuacoes = ['.', ',', '!', '?', ';', ':', '(', ')', '"', '“', '”'];
    var textoLimpo = "";
    for (var i = 0; i < textoMinusculo.length; i++) {
        var caractere = textoMinusculo[i];
        var ehPontuacao = false;
        for (var j = 0; j < pontuacoes.length; j++) {
            if (caractere === pontuacoes[j]) {
                ehPontuacao = true;
                break;
            }
        }
        if (!ehPontuacao) {
            textoLimpo += caractere;
        }
    }

    var palavras = [];
    var palavra = "";
    for (var i = 0; i < textoLimpo.length; i++) {
        var c = textoLimpo[i];
        if (c === ' ' || c === '\n' || c === '\t') {
            if (palavra !== "") {
                palavras.push(palavra);
                palavra = "";
            }
        } else {
            palavra += c;
        }
    }
    if (palavra !== "") {
        palavras.push(palavra);
    }

    var contagem = {};
    for (var i = 0; i < palavras.length; i++) {
        var p = palavras[i];
        if (contagem[p] === undefined) {
            contagem[p] = 1;
        } else {
            contagem[p]++;
        }
    }

    var tabela = "<table><tr><th>Palavra</th><th>Ocorrências</th></tr>";
    for (var palavra in contagem) {
        tabela += "<tr><td>" + palavra + "</td><td>" + contagem[palavra] + "</td></tr>";
    }
    tabela += "</table>";

    document.getElementById("resultado").innerHTML = tabela;
}
