var resposta;

function pergunta1() {

  while (resposta != 1 || resposta != 2 || resposta != 3 || resposta != 4) {

    resposta = prompt("Em CSS, como você selecionaria todas as tags <p> em uma página? \n \n 1 - p {} \n 2 - #p{} \n 3 - <p> {} \n 4 - .p{}");

    if (resposta == 1) {
      window.location.href = './seletores2.html'
      break;
    }
    else if (resposta == 3 || resposta == 2 || resposta == 4) {
      window.location.href = './gameover-seletores.html'
      break;
    }
    else {
      alert(`Opção inválida`);
    }
  }
}

function pergunta2() {

  while (resposta != 1 || resposta != 2 || resposta != 3 || resposta != 4) {

    resposta = prompt("Em CSS, como você selecionaria essa imagem usando seu id? \n \n 1 - .seleciona {} \n 2 - #seleciona {} \n 3 - img {} \n 4 - seleciona {}");

    if (resposta == 2) {
      window.location.href = './seletores3.html'
      break;
    }
    else if (resposta == 1 || resposta == 3 || resposta == 4) {
      window.location.href = './gameover-seletores.html'
      break;
    }
    else {
      alert(`Opção inválida`);
    }
  }
}

function pergunta3() {

  while (resposta != 1 || resposta != 2 || resposta != 3 || resposta != 4) {

    resposta = prompt("Em CSS, como você selecionaria esta classe abaixo? \n \n 1 - .p {} \n 2 - #paragrafo \n 3 - .class \n 4 - .paragrafo");


    if (resposta == 4) {
      window.location.href = './win-seletores.html'
      break;
    }
    else if (resposta == 1 || resposta == 2 || resposta == 3) {
      window.location.href = './gameover-seletores.html'
      break;
    }
    else {
      alert(`Opção inválida`);
    }
  }
}