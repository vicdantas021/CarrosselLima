/testando o background/
const telaCarrossel = document.getElementById("carrossel");
const btnEsquerda = document.querySelector('#btnEsquerda');
const btnDireita = document.querySelector('#btnDireita');
const cores = [
    'var(--rosa)',
    'var(--vermelho-escuro)',
    'var(--vermelho)'
];

/**variável acumuladora de valor**/
let indiceAtual = 0;
let temporizador;

function atualizarCarrossel() {
    telaCarrossel.style.backgroundColor = cores[indiceAtual];
}
btnDireita.addEventListener("click", () => {
    indiceAtual++;
    if(indiceAtual > cores.length){
        indiceAtual = 0;
    }
    atualizarCarrossel();

    clearTimeout(temporizador);
    temporizador = setTimeout(() => {
    btnDireita.click();
},3000);

});

btnEsquerda.addEventListener("click", () => {
    indiceAtual--;
    if(indiceAtual < 0){
        indiceAtual = cores.length - 1;
    }  
    atualizarCarrossel(); 

     clearTimeout(temporizador);
        temporizador = setTimeout(() => {
        btnEsquerda.click();
        },3000);    

});