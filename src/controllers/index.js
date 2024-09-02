const prompt = require("prompt-sync")();
const arte = require("./cliente.js");

while (true) {
  console.log(`
        Gerenciamento de Barbearia
        
        1 - Criar
        2 - Atualizar
        3 - Listar
        4 - Remover
        5 - Sair
        `);
  const opcao = prompt();

  switch (opcao) {
    case "1":
        arte.criar()
        break;
    case "2":
        arte.atualizar();
        break;
    case "3":
        arte.listar()
        break;
    case "4":
        arte.remover()
        break;
    case "5":
        process.exit()
        break
    default:
        console.log("Opção inválida")
        break;
  }
}