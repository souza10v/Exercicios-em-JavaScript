function verificar(){
    var idade = Number(window.document.getElementById('anon').value)
    //var img = window.document.getElementById('imgs')
    var resultado = window.document.getElementById('resultado')
    var sexo = window.document.getElementsByName('radsex')

    var data =  new Date();
    var ano = data.getFullYear();

    var idadeatual = ano - idade;

    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if ( sexo[0].checked){
        genero = 'masc'
    }
    else if (sexo[1].checked){
        genero = 'fem'
    }

    console.log(genero)

    
    if (idade == 0 || idade > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente')
    }
    else {
        if(idadeatual < 10 && genero == "masc"){
            resultado.innerHTML = `E um menino de ${idadeatual} anos`
            img.setAttribute('src', 'img/menino.png')
        }
        else if (idadeatual < 10 && genero == "fem"){
            resultado.innerHTML = `Uma menina de ${idadeatual} anos`
            img.setAttribute('src', 'img/menina.png')
        }
        else if (idadeatual >= 10 && idadeatual < 21 && genero == "masc"){
            resultado.innerHTML = `Um jovem de ${idadeatual} anos`
            img.setAttribute('src', 'img/jovem.png')
        }
        else if (idadeatual >= 10 && idadeatual < 21 && genero == "fem"){
            resultado.innerHTML = `Uma jovem de ${idadeatual} anos`
            iimg.setAttribute('src', 'img/jovema.png')
        }
        else if (idadeatual >= 21 && idadeatual <60 && genero == "masc" ) {
            resultado.innerHTML = `Um homem de ${idadeatual} anos`
            img.setAttribute('src', 'img/adulto.png')
        }
        else if (idadeatual >= 21 && idadeatual <60 && genero == "fem" ) {
            resultado.innerHTML = ` Uma mulher de ${idadeatual} anos`
            img.setAttribute('src', 'img/adulta.png')
        }
        else if (idadeatual >= 60 && genero == "masc"){
            resultado.innerHTML = `Um idoso de ${idadeatual} anos`
            img.setAttribute('src', 'img/idoso.png')
        }
        else {
            resultado.innerHTML = `Uma idosa de ${idadeatual} anos`
            img.setAttribute('src', 'img/idosa.png')
        }
    }  
    
    resultado.style.textAlign = 'center'
    resultado.appendChild(img)


}
