##Agrupar dados em estruturas##

- Partir do exercício anterior
- Criar um modelo de objeto para guardar as informações de pessoas
- Receber dados de uma quantidade arbitrária de pessoas
- Mover comparações para funções



Objeto modelo

- Criar uma função para ser usada como construtora
- Agrupar os dados de cada pessoa em um objeto
Ex:
new Pessoa(‘Bob’, 28, azul);


Mover comparações para funções

- Separar cada tipo de comparação ou operação realizada com os dados
em uma função específica
- Chamar funções ao final.

  ## Pensando além##
Da maneira que criamos o objeto pessoa acima, toda vez que eu quiser criar uma nova pessoa, será necessário repetir todo esse código, o que pode ser completamente inviável a depender do tamanho e complexidade do nosso código.

Então, vamos pensar um pouco além...

- Pergunta: Como vocês acham que é possível reutilizar o código de um objeto literal, como o escrito anteriormente, para criar outras pessoas sem precisar reescrever tudo novamente?

- Resposta: Nós podemos colocar todo esse código dentro de uma função, para que seja possível criar outros objetos semelhantes:
--Img mostra <a href="https://prnt.sc/I4_mYmOXxbOO"> aqui o exemplo! </a>--

  ## Porém, dessa maneira, todos os objetos criados a partir da função Pessoa têm os mesmos dados, pois eles estão fixos dentro da função.

- Pergunta: Como fazer para criar diferentes objetos de uma maneira dinâmica?

- Resposta: Precisamos receber os valores das propriedades dinamicamente, para cada pessoa que for criada.

------ > E para isso, creamos uma↙️
  ## Função Construtora 

  Nós temos então o que chamamos de Função Construtora, que são funções que "constroem" um novo objeto a partir das propriedades que ela, obrigatoriamente, deve receber de qualquer instância de objeto que a invocar.
   - A ideia de uma função construtora é muito semelhante. Ela recebe parâmetros para construir um objeto com esses valores.
