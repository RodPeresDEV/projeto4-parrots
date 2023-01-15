const imagens =['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];

let cartasSelecionadas = [];

let quantidadeCartas = 0;

function iniciarJogo() {

    while ((quantidadeCartas < 4) || (quantidadeCartas > 14) || (quantidadeCartas % 2 !== 0)) {
        quantidadeCartas = Number(prompt("Com quantas cartas você quer jogar?"));
        
    }
    gerarCartas(); 
}

iniciarJogo();

function randomizar() {
    return Math.random() - 0.5
}

function gerarCartas() {
    const tabuleiro = document.querySelector('.tabuleiro')

    const baralho = [];
    for (let i=0; i < (quantidadeCartas / 2); i++) {
        const carta = `
            <div onclick="virarCarta(this)" class="carta">
                <img class="frente" src="imgs/back.png" />
                <img class="verso" src='imgs/${imagens[i]}.gif'
            </div>
        `
        baralho.push(carta)
        baralho.push(carta)
    }
    
    baralho.sort(randomizar)

    for (let i=0; i < baralho.length; i++) {
        tabuleiro.innerHTML += baralho[i];
    } 
}    

function virarCarta(carta) {
    if (cartasSelecionadas.length >= 2 || cartasSelecionadas.includes(carta)) return
    cartasSelecionadas.push(carta)
    carta.classList.add('virada')

    if (cartasSelecionadas.length === 2 && cartasSelecionadas[0].innerHTML === cartasSelecionadas[1].innerHTML) {
        cartasSelecionadas[0].setAttribute('onclick', ' ')
        cartasSelecionadas[1].setAttribute('onclick', ' ')
        cartasSelecionadas = [];
    }

    if (cartasSelecionadas.length === 2 && cartasSelecionadas[0].innerHTML !== cartasSelecionadas[1].innerHTML) {
        setTimeout(()=>{
            cartasSelecionadas[0].classList.remove('virada')
            cartasSelecionadas[1].classList.remove('virada')
            cartasSelecionadas = [];
        },1000)
    }
    
}

