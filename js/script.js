
function responder(certo, proxWin, proxLose) {


  while (resposta != 1 || resposta != 2 || resposta != 3 || resposta != 4) {

    var resposta = prompt('Insira o número da opção correta.');

    if (resposta == certo) {
      window.location.href = proxWin
    }
    else if (resposta == 1 || resposta == 2 || resposta == 3 || resposta == 4) {
      window.location.href = proxLose
    }
    else {
      alert(`Opção inválida`);
    }
  }
}