let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let crianças = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carne = 400;
    let cerveja = 1200;
    let bebida = 1000;

    if (duracao >= 6){
        carne = 650;
        cerveja = 2000;
        bebida = 1500;
    }

    let qtdTotalCarne = carne * adultos + (carne/2 * crianças);
    let qtdTotalCerveja = cerveja * adultos;
    let qtdTotalBebida = bebida * adultos + (bebida/2 * crianças);
    // console.log(qtdTotalCarne);

    resultado.innerHTML = `<p>🍖 ${qtdTotalCarne / 1000}Kg de Carnes</p>`
    resultado.innerHTML += `<p>🍻 ${Math.ceil(qtdTotalCerveja / 355)}Latas de Cerveja</p>`
    resultado.innerHTML += `<p>🥤 ${Math.ceil(qtdTotalBebida/1000)}L de Bebidas</p>`
}