
const salvarEstilo = () => {

    localStorage.setItem("bgcolor", document.getElementById('bgColor').value)
    localStorage.setItem("font", document.getElementById('font').value)
    localStorage.setItem("image", document.getElementById('image').value)
}

const pegarEstilo = () => {
    document.body.style.backgroundColor = localStorage.getItem("bgcolor")
    document.querySelector("p").style.fontFamily = localStorage.getItem("font")
    document.querySelector("img").setAttribute('src', localStorage.getItem("image"));
}

function setStyles() {
    console.log("xablau");

    salvarEstilo()
    pegarEstilo()
}

pegarEstilo()
document.querySelector("#testar").addEventListener("click", setStyles)
