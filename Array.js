let nomes = [];

while (true) {
  let acao = prompt("Escolha ação: adicionar, filtrar, buscar, transformar, verificar ou sair").toLowerCase();
  if (acao === "sair") break;

  if (acao === "adicionar") {
    let nome = prompt("Digite o nome para adicionar:");
    nomes.push(nome);
    console.log("Lista atualizada:", nomes);
  } else if (acao === "filtrar") {
    let letra = prompt("Digite a letra inicial para filtrar:").toLowerCase();
    let filtrados = nomes.filter(nome => nome.toLowerCase().startsWith(letra));
    console.log("Nomes filtrados:", filtrados);
  } else if (acao === "buscar") {
    let busca = prompt("Digite o nome para buscar:");
    let encontrado = nomes.find(nome => nome === busca);
    if (encontrado) {
      console.log(`Nome encontrado: ${encontrado}`);
    } else {
      console.log("Nome não encontrado.");
    }
  } else if (acao === "transformar") {
    let maiusculas = nomes.map(nome => nome.toUpperCase());
    console.log("Nomes em maiúsculas:", maiusculas);
  } else if (acao === "verificar") {
    let todosMaisQueTres = nomes.every(nome => nome.length > 3);
    console.log(todosMaisQueTres);
  } else {
    console.log("Ação inválida.");
  }
}
