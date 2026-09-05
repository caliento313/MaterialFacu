// Variável que guarda a chave da API (substitua pela sua chave gerada na OpenAI)
const CHATGPT_KEY = "SUA_CHAVE_AQUI";

// Função que será chamada ao clicar no botão "Perguntar"
const consultaChat = async () => {
    // Captura o valor digitado no campo de texto
    let question = document.getElementById('question').value;

    // Exibe a pergunta na div "pergunta"
    document.getElementById('pergunta').innerHTML = question;

    // Faz a requisição para a API do ChatGPT
    await fetch("https://api.openai.com/v1/completions", {
        method: "POST", // Método HTTP
        headers: {
            Accept: "application/json", // Aceita resposta em JSON
            "Content-Type": "application/json", // Envia dados em JSON
            Authorization: "Bearer " + CHATGPT_KEY, // Autenticação com a chave da API
        },
        body: JSON.stringify({
            model: "text-davinci-002", // Modelo de linguagem usado
            prompt: question,          // Pergunta enviada pelo usuário
            max_tokens: 1024,          // Limite de tokens na resposta
            temperature: 0.5           // Controla a criatividade da resposta
        }),
    })
    .then((response) => response.json()) // Converte a resposta para JSON
    .then((data) => {
        // Exibe o texto da resposta na div "resposta"
        document.getElementById('resposta').innerHTML = data.choices[0].text;
    })
    .catch(() => {
        // Caso ocorra erro, mostra mensagem de aviso
        document.getElementById('resposta').innerHTML = "Reformule a pergunta";
    });
};

