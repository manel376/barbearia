const prompt = require("prompt-sync")()
const db = []

const modelo = () => {
    const nome = prompt("Qual o nome da obra? ")
    const autor = prompt("Qual o autor da obra? ")
    const periodo = prompt("Qual o periodo da obra? ")

    if(autor != "" && nome != "" && periodo != "") {
        return {
            nome,
            autor,
            periodo
        }
    }

    console.log("Dados inválidos")
}

const criar = () => {
    const arte = modelo()

    if(arte) {
        db.push(arte)
        console.log("Obra criada com sucesso!")
    }
}

const listar = () => {
    db.forEach((arte, indice) => {
        console.log(indice + 1, arte)
    })
}

const atualizar = () => {
    const indice = prompt("Qual o indice deseja atualizar? ") - 1
    const novo = modelo()

    if(indice >= 0 && indice < db.length && novo) {
        db[indice] = novo
        console.log("Obra atualizada com sucesso!")
    }
}


const remover = () => {
    const indice = prompt("Qual indice deseja remover? ") - 1

    if(indice >= 0 && indice < db.length) {
        db.splice(indice, 1)
        console.log("Obra removida com sucesso!")
    }
}

module.exports = {
    criar,
    atualizar,
    remover,
    listar
}