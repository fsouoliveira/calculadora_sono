// Função para calcular a dívida de sono
function calculateSleepDebt() {
    // Obtém o número de horas de sono necessárias por noite do input
    const requiredSleep = parseFloat(document.getElementById('required-sleep').value);
    
    // Inicializa a variável para somar as horas dormidas
    let actualSleep = 0;
    
    // Loop para somar as horas dormidas das 7 noites
    for (let i = 1; i <= 7; i++) {
        // Obtém as horas dormidas para a noite i e adiciona à soma total
        actualSleep += parseFloat(document.getElementById('actual-sleep-night' + i).value) || 0;
    }
    
    // Calcula o total de sono necessário para 7 noites
    const totalRequiredSleep = requiredSleep * 7;
    
    // Calcula a dívida de sono
    const sleepDebt = totalRequiredSleep - actualSleep;
    
    // Obtém o elemento onde o resultado será exibido
    const resultElement = document.getElementById('result');
    
    // Atualiza o texto do resultado com base na dívida de sono calculada
    if (sleepDebt > 0) {
        resultElement.textContent = `Você tem um débito de sono de ${sleepDebt} horas nas últimas 7 noites.`;
    } else if (sleepDebt < 0) {
        resultElement.textContent = `Você dormiu ${-sleepDebt} horas a mais do que o necessário nas últimas 7 noites.`;
    } else {
        resultElement.textContent = `Você dormiu a quantidade exata de sono necessária nas últimas 7 noites.`;
    }
}

// Função para limpar os campos de entrada e o resultado
function clearInputs() {
    // Limpa o campo de horas de sono necessárias
    document.getElementById('required-sleep').value = '';
    
    // Loop para limpar os campos de horas dormidas para as 7 noites
    for (let i = 1; i <= 7; i++) {
        document.getElementById('actual-sleep-night' + i).value = '';
    }
    
    // Limpa o texto do resultado
    document.getElementById('result').textContent = '';
}
