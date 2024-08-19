let pessoa1 = Pessoa(prompt("Qual é seu nome:"), prompt("Qual é sua idade:"), prompt("Qual sua Cor favorito:"));

let pessoa2 = Pessoa(prompt("Qual é seu nome:"), prompt("Qual é sua idade:"), prompt("Qual sua Cor favorito:"));


function Pessoa(nome, idade, corFavorito) {
  let pessoa = {};

  pessoa.nome = nome;
  pessoa.idade = idade;
  pessoa.corFavorito = corFavorito;

  pessoa.nova = function nova() {
    console.log(`O usuario ${this.nome} tem ${this.idade} anos  e sua cor Favorito é ${this.corFavorito}`)
  }

  return pessoa;
}

pessoa1.nova();
pessoa2.nova();