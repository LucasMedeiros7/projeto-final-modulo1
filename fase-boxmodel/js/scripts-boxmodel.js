var resposta;

function pergunta1() {

  while (resposta != 1 || resposta != 2 || resposta != 3 || resposta != 4) {

    resposta = prompt("No Box model, como são chamadas as quatro caixas em camadas? \n \n 1 - Text, Padding, Border, Margin \n 2 - Image, Padding, Border, Margin \n 3 - Data, Padding, Border, Margin \n 4 - Content, Padding, Border, Margin");

    if (resposta == 4) {
      window.location.href = './pergunta-box-2.html'
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

function pergunta2() {

  while (resposta != 1 || resposta != 2 || resposta != 3 || resposta != 4) {

    resposta = prompt("O que o box-sizing faz? \n \n 1 - Permite definir o tamanho de um elemento \n 2 - Permite definir o preenchimento e as margens} \n 3 - Altera o preenchimento para que seja incluído na largura e na altura \n 4 - Altera a borda para que contorne o texto.");

    if (resposta == 3) {
      window.location.href = './pergunta-box-3.html'
      break;
    }
    else if (resposta == 1 || resposta == 2 || resposta == 4) {
      window.location.href = './gameover-boxmodel.html'
      break;
    }
    else {
      alert(`Opção inválida`);
    }
  }
}

function pergunta3() {

  while (resposta != 1 || resposta != 2 || resposta != 3 || resposta != 4) {

    resposta = prompt("Observando o código abaixo, qual é a largura deste elemento? \n \n 1 - 60px \n 2 - 70px \n 3 - 80px \n 4 - 90px");


    if (resposta == 4) {
      window.location.href = './win-boxmodel.html'
      break;
    }
    else if (resposta == 1 || resposta == 2 || resposta == 3) {
      window.location.href = './gameover-boxmodel.html'
      break;
    }
    else {
      alert(`Opção inválida`);
    }
  }
}