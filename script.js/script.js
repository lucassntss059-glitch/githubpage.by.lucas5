// Uma função simples só pra mostrar que sei um pouco de lógica de programação no front também!
document.addEventListener('DOMContentLoaded', () => {
    const saudacaoElement = document.getElementById('saudacao');
    const horaAtual = new Date().getHours();
    
    let mensagem = "";

    if (horaAtual >= 5 && horaAtual < 12) {
        mensagem = "Bom dia, Mundo!";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        mensagem = "Boa tarde, Mundo!";
    } else {
        mensagem = "Boa noite, Mundo!";
    }

    // Adiciona a mensagem com um log no console igual aprendi na faculdade
    saudacaoElement.innerText = mensagem;
    console.log("Script carregado com sucesso. Sistema rodando!");
});
