const objetoPessoa = {
    nome: "Tiago",
    idade: 29,
    cpf: "1293888129",
    turma: "JavaScript",
    enderecos: [{
        rua: "Jose climber",
        numero: "45",
        complemento: "apto 87"
    }]
}
//pelo o endereço ser um array(lista), para adcionar novos elementos eu preciso usar métodos de array.

objetoPessoa.enderecos.push({
    rua: "Dona Clotilde",
    numero: "71",
    complemento: "Vila senhor barriga"
})


console.log(objetoPessoa.enderecos);
console.log(objetoPessoa.enderecos[1]);