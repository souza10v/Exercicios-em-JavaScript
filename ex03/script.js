function contar(){
    let inicio = Number(window.document.getElementById('inicio').value)
    let fim = Number(window.document.getElementById('fim').value)
    let passo = Number(window.document.getElementById('passo').value)
    let cont = inicio
    let contagem = window.document.getElementById('contagem')    

    if(inicio == 0 || fim == 0 || passo == 0){
        contagem.innerHTML = `Faltando dados ou passo igual a 0.`
    }
    else{
        contagem.innerHTML = `Contando `
    ///    if(contagem = 0){
    ///        window.alert("Passo invalido, considerando passo 1.")
    ///        contagem.innerHTML = `Contagem invalida!`
    ///        passo == 1;
    ///    } 
        if (fim > inicio) {
            while(cont <= fim){
                //contagem crescente
                console.log(cont)
                contagem.innerHTML += `${cont} \u{1F449}`
                cont += passo;
            }
        }
        else if (inicio > fim) {
            //contagem decrescente
            cont = inicio
            while(fim <= cont){
                console.log(cont)
                contagem.innerHTML += `${cont} \u{1F449}`
                cont -= passo;
            }
        }
        contagem.innerHTML += `\u{1F3C1}`
    }
    //for(cont=0;cont<=fim;passo){
    //    console.log(cont)
    //}
}