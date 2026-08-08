const mensagens = [
    {
        "id": 1,
        "message": "Meu site ficou fora do ar depois que alterei o DNS e preciso resolver isso com urgência."
    },
    {
        "id": 2,
        "message": "Alguém já conseguiu criar uma automação de atendimento usando IA?"
    },
    {
        "id": 3,
        "message": "Tenho uma sugestão de tema para o próximo evento da comunidade."
    },
    {
        "id": 4,
        "message": "Estou com uma dúvida sobre como configurar o SMTP do meu e-mail."
    },
    {
        "id": 5,
        "message": "Meu WordPress mostra um erro depois que atualizei um plugin."
    },
    {
        "id": 6,
        "message": "Não consigo acessar minha VPS desde ontem e o serviço está parado."
    },
    {
        "id": 7,
        "message": "Quero compartilhar um projeto em Python que desenvolvi no fim de semana."
    },
    {
        "id": 8,
        "message": "O certificado SSL do meu domínio aparece como inválido. Como faço para corrigir?"
    },
    {
        "id": 9,
        "message": "Recebi muitos e-mails marcados como spam e preciso de ajuda para configurar o remetente."
    },
    {
        "id": 10,
        "message": "Gostei muito da última palestra sobre carreira e networking. Obrigado pela organização!"
    },
    {
        "id": 11,
        "message": "Meu banco de dados está indisponível e a aplicação não funciona."
    },
    {
        "id": 12,
        "message": "Alguém conhece uma boa ferramenta para testar prompts de chatbot?"
    },
    {
        "id": 13,
        "message": "Tenho uma ideia de melhoria para a página de inscrição do meetup."
    },
    {
        "id": 14,
        "message": "A URL do meu site redireciona para o endereço errado depois da troca de domínio."
    },
    {
        "id": 15,
        "message": "Meu servidor foi invadido e acredito que existem dados expostos. É urgente."
    },
    {
        "id": 16,
        "message": "Como faço para conectar uma API em uma aplicação JavaScript?"
    },
    {
        "id": 17,
        "message": "O tema do WooCommerce quebrou o layout da loja e preciso de suporte."
    },
    {
        "id": 18,
        "message": "Seria legal organizar um evento presencial sobre inteligência artificial."
    },
    {
        "id": 19,
        "message": "Perdi o acesso à caixa de entrada do e-mail da minha empresa."
    },
    {
        "id": 20,
        "message": "Qual VPS vocês recomendam para uma aplicação pequena com banco de dados?"
    },
    {
        "id": 21,
        "message": "Encontrei um bug no código Python ao consumir uma API e não consigo identificar a causa."
    },
    {
        "id": 22,
        "message": "Meu domínio venceu e o site está indisponível. Preciso recuperar o acesso com urgência."
    },
    {
        "id": 23,
        "message": "Quero deixar um feedback: o horário do último meetup poderia ser mais cedo."
    },
    {
        "id": 24,
        "message": "Depois de instalar um plugin de segurança, não consigo acessar o painel do WordPress."
    },
    {
        "id": 25,
        "message": "O chatbot está respondendo com informações erradas e preciso de ajuda para ajustar o prompt."
    },
    {
        "id": 26,
        "message": "Alguém vai participar da palestra de sábado?"
    },
    {
        "id": 27,
        "message": "O servidor está lento desde a migração da hospedagem."
    },
    {
        "id": 28,
        "message": "Minha conta parece ter sido hackeada e começaram a enviar spam pelo meu e-mail."
    },
    {
        "id": 29,
        "message": "Estou criando um agente de IA em Python e tenho uma dúvida sobre integração com API."
    },
    {
        "id": 30,
        "message": "Recomendo convidar uma pessoa especialista em WordPress para o próximo evento."
    },
    {
        "id": 31,
        "message": "O registro do domínio foi concluído, mas a URL ainda não funciona."
    },
    {
        "id": 32,
        "message": "Preciso de ajuda para restaurar o backup do banco de dados na hospedagem."
    },
    {
        "id": 33,
        "message": "Estou recebendo um erro 500 na aplicação e o site ficou fora do ar."
    },
    {
        "id": 34,
        "message": "Alguém conhece um plugin para melhorar o SEO no WordPress?"
    },
    {
        "id": 35,
        "message": "Quero compartilhar uma automação que organiza as inscrições dos eventos da comunidade."
    },
    {
        "id": 36,
        "message": "O certificado SSL foi renovado com sucesso e agora o site está funcionando."
    },
    {
        "id": 37,
        "message": "Não consigo configurar o banco de dados no servidor. Alguém pode me ajudar?"
    },
    {
        "id": 38,
        "message": "Tenho uma sugestão para melhorar a documentação da API."
    },
    {
        "id": 39,
        "message": "A página do evento está muito boa e o processo de inscrição foi simples."
    },
    {
        "id": 40,
        "message": "Bom dia, pessoal! Espero que todos tenham uma ótima semana."
    }
]

let categorias = {
    site: /site|domínio|DNS|URL|SSL|registro/,
    host: /hospedagem|servidor|VPS|infraestrutura|banco de dados/,
    mail: /e-mail|email|SMTP|caixa de entrada|spam|remetente/,
    wp: /WordPress|plugin|tema|WooCommerce/,
    ia: /IA|inteligência artificial|prompt|automação|agente|chatbot/,
    prog: /código|API|JavaScript|Python|bug|aplicação|plugin/,
    com: /comunidade|evento|meetup|palestra|networking/,
    fb: /feedback|sugestão|ideia|melhoria|recomendação/,
}

let contadores = {
    categorias: {},
    prioridade: {}
}

let prioridade = [ // o poder do index
    /* BAIXA */ /sugestão|feedback|ideia|gostei|obrigado|quero compartilhar|recomendação|recomendam|alguém conhece/i,
    /* MEDIA */ /erro|problema|ajuda|dúvida|não funciona|não consigo configurar|dificuldade|como faço|preciso de suporte|Encontrei um bug|servidor está lento|endereço errado|inválido/i,
    /* ALTA */ /urgente|fora do ar|indisponível|invadido|hackead|vazamento|dados expostos|perdi o acesso|não consigo acessar|serviço parado|URL ainda não funciona/i,
]

let msgs = []

for (let m = 0; m < mensagens.length; m++) {
    const mensagem = mensagens[m];
    mensagem.categories = []
    msgs.push(mensagem)

    for (c in categorias) {
        if (categorias[c].test(mensagem.message)) {
            mensagem.categories.push(c);

            if (!contadores.categorias[c]) {
                contadores.categorias[c] = 1
            } else contadores.categorias[c] += 1
        }
    }

    if (mensagem.categories.length != 0) {
        for (let p = 0; p < prioridade.length; p++) {
            if (prioridade[p].test(mensagem.message)) {
                mensagem.priority = p
            }
        }
        if (mensagem.priority === undefined) {
            mensagem.priority = 0;
        }
    } else mensagem.categories = ["outro"], mensagem.priority = 0;

    if (!contadores.prioridade[mensagem.priority]) {
        contadores.prioridade[mensagem.priority] = 1
    } else contadores.prioridade[mensagem.priority] += 1
}

console.log(msgs, contadores)

setTimeout(() => {
    const cont = document.querySelector("#container")

    for (let m = 0; m < msgs.length; m++) {
        const msg = msgs[m]
        const mensagem = document.createElement("div")
        mensagem.className = `mensagem priority-${msg.priority}`
        mensagem.innerHTML = `<span class="id">${msg.id}</span>
            <span class="message">${msg.message}</span>
            <span class="priority">${msg.priority}</span>`

        cont.append(mensagem)
    }
}, 250)