# assignment_1-grupo-03-

* Para o estilo do layout foi utilizado o framework Bootstrap na versão 3.3.7 e a bilbioteca JS jQuery para manipulaçao da DOM.

O algoritmo consiste em rankear os 34 alunos selecionados através de suas respectivas pontuações na prova técnica (esta nota multiplicado por 100) somada as pontuações dos quatro tipos de perfil (Respeito, Paixão por Tecnologia, Protagonismo de Carreira e Growth Mindset) traçados por meio das respostas obtidas num questionamento previamente realizado.

A partir destes dados, puxados da planilha em .csv convertida em um JSON, rankeamos os alunos por suas pontuações finais (a soma descrita acima).

A separação dos grupos é feita através de um laço for, no qual colocamos sempre o melhor e o pior rankeado do grupo geral dos alunos, e após isso retirando esses determinados elementos do array criado com o rankeamento geral, assim equilibrando de forma considerada justa por nosso grupo de desenvolvedores. 

Optamos por tal algoritmo por acharmos que esta seleção, juntando tanto aspectos técnicos quanto comportamentais, determinariam grupos balanceados com alunos melhores e piores rankeados.

Após o algoritmo ser rodado e os grupos definidos, suas respectivas tabelas são preenchidas no HTML utilizando métodos da bilbioteca jQuery.
