$().ready(function() {
            var rankeamento = [];
            
            for (var i = 0; i < array['features'].length; i++) {
                
                // faz a pontuacao do aluno com PERFIS + PONTUACAO PROVA * 100
                var pontuacao_aluno = parseFloat(array['features'][i].properties['nota prova técnica']) * 100 + parseInt(array['features'][i].properties['perfil - respeito']) + parseInt(array['features'][i].properties['perfil - paixão por tecnologia']) + parseInt(array['features'][i].properties['perfil - protagonismo de carreira']) + parseInt(array['features'][i].properties['perfil - growth mindset']);
                
                rankeamento[i] = {id: array['features'][i].properties['id'], pontos: pontuacao_aluno, mindset: array['features'][i].properties['perfil - growth mindset'], prova: array['features'][i].properties['nota prova técnica']};
            }
            
            // faz o sort do rankeamento a partir da propriedade PONTOS
            rankeamento.sort(function(a, b){return a.pontos - b.pontos});
            
            // array contendo os 4 grupos a serem montados
            var grupo1 = [];
            var grupo2 = [];
            var grupo3 = [];
            var grupo4 = [];
            
            // contador para verificar contagem de grupos de 0 a 3
            var contador = 0;
          
            //percorre o array rankeamento e vai tirando max e min e retirando os elementos do array
             while (rankeamento.length > 0) {
                if (contador == 0) {
                    grupo1.push(rankeamento.pop());
                    // somente recebe quando estiver com tamanho de NO MAX 9, para equilibrar o num de particip. dos grupos
                    if (grupo1.length != 9) {
                        grupo1.push(rankeamento.shift());
                    }
                    contador++;
                } else if (contador == 1) {
                    // somente recebe quando estiver com tamanho de NO MAX 9, para equilibrar o num de particip. dos grupos
                    grupo2.push(rankeamento.pop());
                    if (grupo1.length != 9) {
                        grupo2.push(rankeamento.shift());
                    }
                    contador++;      
                } else if (contador == 2) {
                    grupo3.push(rankeamento.pop());
                    grupo3.push(rankeamento.shift());
                    contador++;
                } else if (contador == 3) {
                    grupo4.push(rankeamento.pop());
                    grupo4.push(rankeamento.shift());
                    contador++;       
                } else {
                    contador = 0;
                    continue;
                }
            }
            
            // faz o sort em todos os grupos por ID
            grupo1.sort(function(a, b){return a.id - b.id});
            grupo2.sort(function(a, b){return a.id - b.id});
            grupo3.sort(function(a, b){return a.id - b.id});
            grupo4.sort(function(a, b){return a.id - b.id});
            
            // preenche as tabelas com seus respectivos grupos
            for (var a in grupo1) {
                $("#tab-1").append("<tr><td><b>" + grupo1[a].id + "</b></td><td>" + grupo1[a].prova + "</td><td>" + grupo1[a].mindset + "</td><td>" + grupo1[a].pontos + "</td></tr>");
            }
            
            for (var a in grupo2) {
                $("#tab-2").append("<tr><td><b>" + grupo2[a].id + "</b></td><td>" + grupo2[a].prova + "</td><td>" + grupo2[a].mindset + "</td><td>" + grupo2[a].pontos + "</td></tr>");
            }
            
            for (var a in grupo3) {
                $("#tab-3").append("<tr><td><b>" + grupo3[a].id + "</b></td><td>" + grupo3[a].prova + "</td><td>" + grupo3[a].mindset + "</td><td>" + grupo3[a].pontos + "</td></tr>");
            }
            
            for (var a in grupo4) {
                $("#tab-4").append("<tr><td><b>" + grupo4[a].id + "</b></td><td>" + grupo4[a].prova + "</td><td>" + grupo4[a].mindset + "</td><td>" + grupo4[a].pontos + "</td></tr>");
            }
        });  