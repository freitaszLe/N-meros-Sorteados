function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);//id do elemento que quer recuperar uusa o vale pra guardar o input
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = []; //criar um array ara os numeros sorteados
    let numero;
    for(let i = 0; i< quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
//para n repetr numeros:
        while(sorteados.includes(numero)){//enquanto  repetir numero, gera outro para substituir
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero); // push para guardar no array
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>` //utiliza o inner pra manipular o texto html

    //trocar a classe do botao reiniciar para habilitar ele
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // ja existe a funçao de pegar um numero aleatorio 
    //com um valor entre dois números, incluindo o último possíve
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){//se o botao tem a classe desabilitado:
        botao.classList.remove('container__botao-desabilitado');//remove a classe
        botao.classList.add('containner__botao');//e adiciona a habilitado
    } else{//o contrario
        botao.classList.remove('container__botao');
        botao.classList.add('containner__botao-desabilitado')
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}
