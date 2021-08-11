// Boolean
const contaPaga: boolean = false

// Number
const idade: number = 27
const avaliação: number = 4.1

// String
const nome: string = 'Carla Souza'

// Array
const idades: number[] = [23, 29, 30, 41]
const idades2: Array<number> = [28, 27, 43, 15, 19]

// Tuple
let jogadores: [string, number, boolean]
jogadores = ['Ton', 29, true]

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao:StatusAprovacao = StatusAprovacao.Aprovado

// Any
const retornoDaAPI: any[] = [123, 'Carla', false]
const retornoDaAPI2:any = {
    //....
}

// Void
function printarNaTela(msg: string):void {
    console.log(msg)
}

// Null e Undefined
const u: undefined = undefined
const n: null = null

// Object
function criar(objecto: object){
    //...
}
criar({
    propriedade: 1
})
//criar('Carla') // Dá erro

// Never
function loopInfinito():never {
    while (true) { }
}
function erro(mensagem: string): never {
    throw new Error(mensagem)
}
function falha(){
    return erro('Algo Falhou')
}

// Union Types
const nota: string | number = 5
function exibirnota(nota: string | number){
    console.log(`A nota é ${nota}`)
}
exibirnota(10)
exibirnota('10')

// Alias
type Funcionario = {
    nome: string
    sobreNome: string
    dataNascimento: Date
}
// type Funcionarios = Array<Funcionario>
const funcionarios: Funcionario[] = [{
    nome: 'Carla',
    sobreNome: 'Souza',
    dataNascimento: new Date()
},
{
    nome: 'Fulano',
    sobreNome: 'Costa',
    dataNascimento: new Date()
}]

function tratarFuncionarios (funcionarios: Funcionario []) {
    for (let funcionario of funcionarios) {
        console.log("Nome do funcionário: ", funcionario.nome)
    }
}

let altura: number | null = 1.6
altura = null

type Contato = {
    nome: string
    telefone1: string
    telefone2?: string
}
const contato: Contato = {
    nome: 'Carla',
    telefone1: '1198888',
}

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
(<number>minhaIdade).toString()

// const input = document.getElementById('numero1') as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById('numero1')
console.log(input.value)


