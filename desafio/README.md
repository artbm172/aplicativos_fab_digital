# Radar da Comunidade

## Transformando conversas em informações acionáveis

Comunidades de tecnologia recebem diariamente diferentes tipos de mensagens: dúvidas técnicas, pedidos de ajuda, relatos de problemas, feedbacks, sugestões, compartilhamentos de projetos e conversas entre participantes.

Quando o volume de mensagens aumenta, torna-se difícil identificar manualmente:

- quais assuntos aparecem com mais frequência;
- quais mensagens precisam de atenção prioritária;
- quais temas estão gerando mais dúvidas;
- quais mensagens representam problemas técnicos;
- quais assuntos podem gerar oportunidades de conteúdo ou relacionamento.

Este desafio é inspirado em um problema próximo da operação de Comunidades da HostGator, mas não exige o uso de produtos, APIs ou infraestrutura proprietária da empresa.

## O desafio

Desenvolver uma aplicação web capaz de processar um conjunto anonimizado de mensagens de uma comunidade de tecnologia e transformá-lo em um painel simples de acompanhamento.

A solução deverá utilizar palavras-chave e regras condicionais para:

- classificar as mensagens por temática;
- identificar a prioridade de cada mensagem;
- contabilizar a quantidade total de mensagens;
- apresentar os assuntos mais recorrentes;
- destacar as mensagens que precisam de atenção.

Não é necessário utilizar inteligência artificial. A classificação pode ser feita comparando as palavras presentes em cada mensagem com listas de palavras-chave previamente definidas.

## Base de mensagens

Cada equipe receberá o arquivo `mensagens_desafio_hostgator.json`, contendo mensagens fictícias e anonimizadas.

Exemplo da estrutura:

```json
[
  {
    "id": 1,
    "message": "Meu site ficou fora do ar depois que alterei o DNS e preciso resolver isso com urgência."
  },
  {
    "id": 2,
    "message": "Alguém já conseguiu criar uma automação de atendimento usando IA?"
  }
]
```

## Requisitos obrigatórios

O MVP deverá:

- possuir uma interface web;
- ler e processar as mensagens do arquivo JSON;
- exibir o total de mensagens analisadas;
- classificar cada mensagem por assunto;
- definir a prioridade de cada mensagem;
- contabilizar quantas mensagens existem em cada categoria;
- apresentar um ranking dos assuntos mais recorrentes;
- indicar o assunto mais recorrente;
- exibir a mensagem original acompanhada de sua categoria e prioridade.

## Categorias sugeridas

As equipes poderão ajustar as categorias e as palavras-chave. A seguinte estrutura pode ser utilizada como ponto de partida:

| Categoria | Exemplos de palavras-chave |
|---|---|
| Sites e domínios | site, domínio, DNS, URL, SSL, registro |
| Hospedagem e servidores | hospedagem, servidor, VPS, infraestrutura, banco de dados |
| E-mail | e-mail, email, SMTP, caixa de entrada, spam, remetente |
| WordPress | WordPress, plugin, tema, WooCommerce |
| Inteligência artificial e automação | IA, inteligência artificial, prompt, automação, agente, chatbot |
| Programação | código, API, JavaScript, Python, bug, aplicação |
| Comunidade e eventos | comunidade, evento, meetup, palestra, networking |
| Feedback e sugestões | feedback, sugestão, ideia, melhoria, recomendação |
| Outros | mensagens que não correspondam às categorias anteriores |

### Mensagens com mais de uma categoria

Quando uma mensagem contiver palavras de diferentes categorias, a equipe poderá:

- selecionar a categoria com o maior número de palavras encontradas;
- permitir que a mensagem receba mais de uma categoria;
- criar uma regra própria de desempate.

A decisão tomada deverá ser explicada durante a apresentação.

## Classificação de prioridade

Além da categoria, cada mensagem deverá receber uma prioridade com base nas palavras ou expressões utilizadas.

### Alta prioridade

Mensagens que indiquem urgência, indisponibilidade, risco de segurança ou perda de acesso.

Exemplos:

- urgente;
- fora do ar;
- indisponível;
- invadido;
- hackeado;
- vazamento;
- dados expostos;
- perdi o acesso;
- não consigo acessar;
- serviço parado.

### Média prioridade

Mensagens que indiquem erro, dificuldade, dúvida ou necessidade de ajuda.

Exemplos:

- erro;
- problema;
- ajuda;
- dúvida;
- não funciona;
- não consigo configurar;
- dificuldade;
- como faço;
- preciso de suporte.

### Baixa prioridade

Mensagens informativas, sugestões, agradecimentos, compartilhamentos ou conversas gerais.

Exemplos:

- sugestão;
- feedback;
- ideia;
- gostei;
- obrigado;
- quero compartilhar;
- recomendação;
- alguém conhece.

Caso uma mensagem contenha palavras de prioridades diferentes, deverá prevalecer a prioridade mais alta identificada. Se não houver palavras de alta ou média prioridade, a mensagem poderá ser classificada automaticamente como baixa prioridade.

## Exemplo de resultado

Mensagem analisada:

> Meu site ficou fora do ar depois que alterei o DNS e preciso resolver isso com urgência.

Resultado esperado:

```json
{
  "category": "Sites e domínios",
  "priority": "Alta",
  "matchedKeywords": [
    "site",
    "fora do ar",
    "DNS",
    "urgência"
  ]
}
```

## Informações do painel

O painel deverá apresentar, no mínimo:

- total de mensagens analisadas;
- quantidade de mensagens de alta prioridade;
- quantidade de mensagens de média prioridade;
- quantidade de mensagens de baixa prioridade;
- quantidade de mensagens por categoria;
- principal assunto identificado;
- ranking dos assuntos mais recorrentes;
- lista das mensagens com categoria e prioridade.

## Fluxo sugerido

1. Ler o arquivo JSON e identificar as mensagens.
2. Normalizar o texto, desconsiderando diferenças entre letras maiúsculas e minúsculas.
3. Procurar palavras e expressões relacionadas às categorias.
4. Classificar cada mensagem pelo critério definido pela equipe.
5. Verificar primeiro os termos de alta prioridade e depois os de média prioridade.
6. Classificar como baixa prioridade as mensagens que não possuírem indicadores de alta ou média.
7. Contabilizar as categorias e organizar o ranking de assuntos.
8. Apresentar os indicadores e as mensagens classificadas no painel.

## Funcionalidades adicionais

Depois de finalizar o escopo obrigatório, a equipe poderá implementar:

- gráfico de distribuição dos assuntos;
- filtros por categoria;
- filtros por prioridade;
- busca por palavra;
- ordenação das mensagens;
- destaque visual para mensagens de alta prioridade;
- exibição das palavras-chave encontradas;
- edição das listas de palavras-chave;
- exportação dos resultados;
- interface responsiva;
- recursos de acessibilidade.

As funcionalidades adicionais não substituem os requisitos obrigatórios.

## Restrições

Para evitar complexidade excessiva e garantir a segurança:

- não utilize dados reais de clientes ou participantes;
- não faça integração com WhatsApp;
- não é necessário implementar login ou autenticação;
- não é necessário utilizar banco de dados;
- não é obrigatório realizar deploy em produção;
- não é necessário utilizar APIs externas;
- não é obrigatório utilizar inteligência artificial;
- não é obrigatório utilizar produtos da HostGator;
- não insira credenciais, senhas ou informações pessoais na solução.

## Tecnologias

A equipe poderá escolher livremente as tecnologias. Uma solução viável pode ser desenvolvida como uma aplicação de página única usando HTML, CSS e JavaScript, React ou outra tecnologia adequada ao tempo disponível.

## Entregáveis

Ao final do desenvolvimento, cada equipe deverá apresentar:

- a aplicação funcionando localmente ou publicada;
- o repositório ou código-fonte;
- uma breve explicação da lógica utilizada;
- uma demonstração do processamento das mensagens;
- o principal assunto identificado na base;
- uma apresentação de até três minutos sobre a solução e as decisões tomadas.

## O que será observado

- atendimento aos requisitos obrigatórios;
- clareza e consistência da lógica de classificação;
- funcionamento da aplicação;
- organização e legibilidade do código;
- clareza na apresentação das informações;
- capacidade da equipe de explicar suas decisões técnicas.

Boa construção!
