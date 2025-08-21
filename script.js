/*.then(data => {
    console.log(data)
})
*/

// console.log(menu)


const dominio = "https://rafaelescalfoni.github.io/desenv_web/restaurante"

const servico = dominio + "/items.json"

//console.log(menu)

const carregandoCardapio = cardapioList => {
    const imaCard = "images/menu/B/B1.jpg"
    return cardapioList.reduce((acum, e) => {
        let item = `<div class="item"><h3>${e.name || e.title}</h3><img src = "${"https://rafaelescalfoni.github.io/desenv_web/restaurante/" + e.photo}"> </div>`;
        return acum + item + imaCard
    }, "")
}


const objRequest = new XMLHttpRequest()
/*
objRequest.open("GET", servico)
objRequest.send()
objRequest.onreadystatechange = function(){
    if(objRequest.readyState== 4 && objRequest.status == 200){
        // aqui eu tenho uma resposta pronta
        // resposta pronta == cardápio
        let cardapio = JSON.parse(objRequest.responseText)
        
        //console.log(carregandoCardapio(cardapio))
 
        document.querySelector("#main-content").innerHTML = carregandoCardapio(cardapio)
        
    }
}
*/
fetch(servico)
    .then(respostaDoServidor => respostaDoServidor.json())
    .then(respostaDaPromise => {
        // aqui eu tenho uma resposta pronta
        // resposta pronta == cardápio
        let cardapio = respostaDaPromise

        document.querySelector("#main-content").innerHTML = carregandoCardapio(cardapio)
    })





