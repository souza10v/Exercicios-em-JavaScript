function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data =  new Date()
    var hora = data.getHours()
    msg.innerText = `Agora sao ${hora} horas.`

    if(hora >= 0 && hora < 12 ){
        msg.innerHTML = "Bom dia"
        img.src = "img/manha.png"
        document.body.style.background = '#e2cd9f'
    }
    else if(hora >= 12 && hora < 18 ){
        msg.innerHTML = "Boa tarde"
        img.src = "img/tarde.png"
        document.body.style.background = '#b9846f'
    }
    else{
        msg.innerHTML = "Boa noite"
        img.src = "img/noite.jpeg"
        document.body.style.background = '#515154'
    }
}

