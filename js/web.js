// Autor: Matheus Latancio Polidoro | data: 29/09/2021 | Senai Front-end
// Atualizado dia: 07/10/2021

var dataNasc, dataAtual, dataEvento, idade, qtdParticipantes, nomeEvento

let data = new Date()

dataAtual = [leftPad(data.getMonth() + 1, 2), leftPad(data.getDate(), 2), data.getFullYear()]
dataNasc = prompt('Digite sua data de nascimento [dd/mm/yyyy]').replaceAll("/", "")
dataNasc = [dataNasc.substring(2, 4), dataNasc.substring(0, 2), dataNasc.substring(4, 8)]

idade = dataAtual[2] - dataNasc[2] 
if(parseInt(dataAtual[0]) < parseInt(dataNasc[0])){
    idade-- 
} else {
    if(parseInt(dataAtual[0]) === parseInt(dataNasc[0])){ 
        if(parseInt(dataAtual[1]) < parseInt(dataNasc[1])){ 
            idade-- 
        }
    }
} 

if (idade > 18) {
    dataEvento = prompt('Digite a data do evento que deseja programar [dd/mm/yyyy]').replaceAll("/","")
    dataEvento = [dataEvento.substring(2, 4), dataEvento.substring(0, 2), dataEvento.substring(4, 8)].join()
    dataAtual = dataAtual.join()

    if (dataEvento > dataAtual) {
        nomeEvento = prompt('Digite um nome para seu evento!')
        if (localStorage.getItem(nomeEvento) == null){
            qtdParticipantes = prompt(`Informe a quantidade de participantes do evento "${nomeEvento}"`)
            localStorage.setItem(nomeEvento, qtdParticipantes)
        } else {
            qtdParticipantes = localStorage.getItem(nomeEvento, qtdParticipantes)
        }
        if (qtdParticipantes < 100) {
            alert(`O evento "${nomeEvento}" foi cadastrado com sucesso! TOTAL: ${qtdParticipantes} participantes.`)
            qtdParticipantes ++
            localStorage.setItem(nomeEvento, qtdParticipantes)
        } else {
            alert(`O evento "${nomeEvento}" Já está lotado, seu ingresso não será possível. TOTAL: ${qtdParticipantes} participantes.`)
        }
    } else {
        alert('Esse evento não será permitido devido data inválida.')
    }
} else {
    alert(`Seu cadastro não é permitido devido idade mínima de 18 anos.Você tem ${idade}`)
}

function leftPad(value, totalWidth, paddingChar) {
    var length = totalWidth - value.toString().length + 1;
    return Array(length).join(paddingChar || '0') + value;
};