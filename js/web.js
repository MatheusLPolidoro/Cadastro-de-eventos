// Autor: Matheus Latancio Polidoro | data: 29/09/2021 | Senai Front-end

// definição de variáveis
var dataNasc, dataAtual, dataEvento, idade, qtdParticipantes, nomeEvento
let data = new Date() // dia atual formato completo
dataAtual = [(data.getMonth() + 1), data.getDate(), data.getFullYear()] // array para calcular a idade exata

// pegar a data de nascimento e tratar o formato dela
dataNasc = prompt('Digite sua data de nascimento [dd/mm/yyy]').replaceAll("/", "")

// função "substring" para fatiar e pegar um pedaço da string
dataNasc = (dataNasc.substring(2, 4) + '-' + dataNasc.substring(0, 2) + '-' + dataNasc.substring(4, 8)).split("-")

// processamento da data e dos meses para trazer a idade precisa do usuário
idade = dataAtual[2] - dataNasc[2]
// Se mes atual for menor que o mes do nascimento, não fez aniversario ainda  
if(parseInt(dataAtual[0]) < parseInt(dataNasc[0])){
    idade-- 
} else {
    // Se estiver no mes do nascimento, verificar o dia
    if(parseInt(dataAtual[0]) === parseInt(dataNasc[0])){ 
        if(parseInt(dataAtual[1]) < parseInt(dataNasc[1])){ 
            // Se a data atual for menor que o dia de nascimento ele ainda não fez aniversario
            idade-- 
        }
    }
} 
if (idade > 18) {
    dataEvento = prompt('Digite a data do evento que deseja programar [dd/mm/yyy]').split("/")
    dataEvento = new Date(dataEvento[2], dataEvento[1], dataEvento[0])
    dataAtual = new Date(dataAtual[2], dataAtual[0], dataAtual[1])
    if (dataEvento.getTime() > dataAtual.getTime()) {
        nomeEvento = prompt('Digite um nome para seu evento!')
        qtdParticipantes = prompt(`Informe a quantidade de participantes do evento "${nomeEvento}"`)
        if (qtdParticipantes < 100) {
            qtdParticipantes ++
            alert(`O evento "${nomeEvento}" foi cadastrado com sucesso!`)
        } else {
            alert(`O evento "${nomeEvento}" Já está lotado, seu ingresso não será possível.`)
        }
    } else {
        alert('Esse evento não será permitido devido data inválida.')
    }
} else {
    alert(`Seu cadastro não é permitido devido idade mínima de 18 anos.Você tem ${idade}`)
}