let onL = document.getElementById("turnOn")
let offL = document.getElementById("turnOff")
let lampada = document.getElementById("lamp")

function verifica(){
    return lampada.src.indexOf ('quebrada') > - 1 //se quebrada verdadeiro se nao falso
}

function ligar() {
    if(!verifica()) {
        lampada.setAttribute('src', 'imagens/ligada.jpg')
    }
}

function desligar (){
    if(!verifica()){
        lampada.src = 'imagens/desligada.jpg'
    }
}

function quebrar(){
    lampada.src = 'imagens/quebrada.jpg'
}

onL.addEventListener('click', ligar)
offL.addEventListener('click', desligar)
lampada.addEventListener('mouseover', ligar)
lampada.addEventListener('mouseleave', desligar)
lampada.addEventListener('dblclick', quebrar)