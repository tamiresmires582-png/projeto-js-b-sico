// Função que atualiza a hora, minutos, segundos e a imagem
function atualizarHoraEImagem() {
    // Obtém os elementos HTML (dentro da função para garantir que estão sempre atualizados)
    const msg = document.getElementById('msg');
    const img = document.getElementById('imagem');

    // Se os elementos não existirem (raro), interrompe
    if (!msg || !img) return;

    // Pega a data e hora atual
    const agora = new Date();
    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    // minutos e segundos com dois dígitos
    const minutosFormatados = minutos < 10 ? '0' + minutos : minutos;
    const segundosFormatados = segundos < 10 ? '0' + segundos : segundos;

    //isso aqui é a mensagem, nao esquece
    msg.innerHTML = `Agora são ${hora}:${minutosFormatados}:${segundosFormatados}`;

    
    if (hora >= 0 && hora < 12) {
        // Manhã
        img.src = 'fotomanha.png';
    } else if (hora >= 12 && hora < 18) {
        // Tarde
        img.src = 'fototarde.png';
    } else {
        // Noite
        img.src = 'fotonoite.png';
    }
}

// Chama a função imediatamente quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Primeira execução para mostrar os dados logo ao abrir
    atualizarHoraEImagem();

    // Configura um intervalo para executar a função a cada 1 segundo (1000 ms)
    setInterval(atualizarHoraEImagem, 1000);
});

 