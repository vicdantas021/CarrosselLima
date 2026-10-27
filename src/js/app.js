// Seleciona todas as divs filhas dentro do container #carrossel
const itensCarrossel = document.querySelectorAll("#carrossel > div");
const btnEsquerda = document.getElementById("btnEsquerda");
const btnDireita = document.getElementById("btnDireita");

let indiceAtual = 0;
let temporizador;

function atualizarCarrossel() {
    // Remove a classe 'ativa' de todas as divs e adiciona só na atual
    itensCarrossel.forEach((item, index) => {
        if (index === indiceAtual) {
            item.classList.add("ativa");
        } else {
            item.classList.remove("ativa");
        }
    });
}

function proximaImagem() {
    indiceAtual++;
    if (indiceAtual >= itensCarrossel.length) {
        indiceAtual = 0;
    }
    atualizarCarrossel();
    reiniciarTemporizador();
}

function imagemAnterior() {
    indiceAtual--;
    if (indiceAtual < 0) {
        indiceAtual = itensCarrossel.length - 1;
    }
    atualizarCarrossel();
    reiniciarTemporizador();
}

function reiniciarTemporizador() {
    clearTimeout(temporizador);
    temporizador = setTimeout(proximaImagem, 3000);
}

// Listeners dos cliques nos botões
btnDireita.addEventListener("click", proximaImagem);
btnEsquerda.addEventListener("click", imagemAnterior);

// Inicia o temporizador automático ao carregar a página
reiniciarTemporizador();