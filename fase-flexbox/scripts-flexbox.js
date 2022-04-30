var resposta;

function pergunta1() {

  while (resposta != 1 || resposta != 2 || resposta != 3 || resposta != 4) {

    resposta = prompt("Qual é o valor padrão da propriedade Flexbox, flex-direction? \n \n 1 - flex-direction: row-reverse \n 2 - flex-direction: column-reverse \n 3 - flex-direction: row \n 4 - flex-direction: column");

    if (resposta == 3) {
      window.location.href = './pergunta-flex-2.html'
      break;
    }
    else if (resposta == 1 || resposta == 2 || resposta == 4) {
      window.location.href = './gameover-flexbox.html'
      break;
    }
    else {
      alert(`Opção inválida`);
    }
  }
}

function pergunta2() {

  while (resposta != 1 || resposta != 2 || resposta != 3 || resposta != 4) {

    resposta = prompt("Qual propriedade Flexbox altera a ordem dos flex items? \n \n 1 - flex-order \n 2 - order \n 3 - flex-change \n 4 - position");

    if (resposta == 2) {
      window.location.href = './pergunta-flex-3.html'
      break;
    }
    else if (resposta == 1 || resposta == 3 || resposta == 4) {
      window.location.href = './gameover-flexbox.html'
      break;
    }
    else {
      alert(`Opção inválida`);
    }
  }
}

function pergunta3() {

  while (resposta != 1 || resposta != 2 || resposta != 3 || resposta != 4) {

    resposta = prompt("Quais outras duas propriedades a propriedade 'flex-flow' representa? \n \n 1 - justify-content and align-items \n 2 - align-items and align-content \n 3 - flex-direction and flex-wrap \n 4 - justify-content and flex-direction");


    if (resposta == 3) {
      window.location.href = './win-flexbox.html'
      break;
    }
    else if (resposta == 1 || resposta == 2 || resposta == 4) {
      window.location.href = './gameover-flexbox.html'
      break;
    }
    else {
      alert(`Opção inválida`);
    }
  }
}