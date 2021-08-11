"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 27;
var avaliação = 4.1;
// String
var nome = 'Carla Souza';
// Array
var idades = [23, 29, 30, 41];
var idades2 = [28, 27, 43, 15, 19];
// Tuple
var jogadores;
jogadores = ['Ton', 29, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaAPI = [123, 'Carla', false];
var retornoDaAPI2 = {
//....
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objecto) {
    //...
}
criar({
    propriedade: 1
});
//criar('Carla') // Dá erro
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo Falhou');
}
// Union Types
var nota = 5;
function exibirnota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirnota(10);
exibirnota('10');
// type Funcionarios = Array<Funcionario>
var funcionarios = [{
        nome: 'Carla',
        sobreNome: 'Souza',
        dataNascimento: new Date()
    },
    {
        nome: 'Fulano',
        sobreNome: 'Costa',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do funcionário: ", funcionario.nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Carla',
    telefone1: '1198888',
};
// Type Assertion
var minhaIdade = 23;
minhaIdade.toString();
minhaIdade.toString();
// const input = document.getElementById('numero1') as HTMLInputElement;
var input = document.getElementById('numero1');
console.log(input.value);
