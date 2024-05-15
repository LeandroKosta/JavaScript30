Bateria JS
Um app que simula tocar bateria com teclado.

Visão Geral:
Bateria JS é um divertido jogo que permite simular uma bateria com os sons de cada parte utilizando algumas teclas do teclado feito com HTML, CSS3 e JavaScript. O foco principal é treinar habilidades principalmente no JavaScript, e tem caráter educador.

Aqui está uma descrição detalhada das funcionalidades do código:

1. Constantes e Seleção de Elementos:

    - playingClass: Classe CSS que será adicionada às teclas durante a animação.
    - crashRide: Seleciona o elemento do prato Crash/Ride pelo ID "crash-ride".
    - hitHatTop: Seleciona o elemento do Hi-Hat superior pelo ID "hihat-top".

2. Funções de Animação:

    - animateCrashOrRide: Define a transformação do prato Crash/Ride para girar e aumentar de tamanho.
    - animateHitHatClosed: Define a posição vertical do Hi-Hat superior para simular que está fechado.

3. Função Principal para Tocar o Som e Animações:

- playSound: Executa quando uma tecla é pressionada.
    - Obtém o código da tecla pressionada.
    - Seleciona o elemento da tecla e o elemento de áudio correspondente ao código da tecla.
    - Toca o som reiniciando o áudio.
    - Executa animações específicas para as teclas 'E' (69) e 'R' (82) (anima o prato Crash/Ride) e para as teclas 'K' (75) e 'I' (73) (anima o Hi-Hat fechado).
    - Adiciona a classe playingClass à tecla pressionada para iniciar a animação.

4. Funções para Remover Transições Após a Animação:

    - removeCrashRideTransition: Remove a transição do prato Crash/Ride, redefinindo sua transformação após a animação.
    - removeHitHatTopTransition: Remove a transição do Hi-Hat superior, redefinindo sua posição após a animação.
    - removeKeyTransition: Remove a classe de animação playingClass da tecla após a transição.

5. Eventos para Remover Transições:

    - Seleciona todas as teclas com a classe .key e adiciona um evento transitionend para cada tecla, chamando removeKeyTransition quando a transição termina.
    - Adiciona eventos transitionend aos elementos crashRide e hitHatTop para chamar removeCrashRideTransition e removeHitHatTopTransition, respectivamente.

6. Evento para Detectar Pressão de Tecla:

    - Adiciona um evento keydown à janela para chamar playSound quando uma tecla é pressionada.

Fluxo de Execução

1. Pressão de Tecla:

    - O usuário pressiona uma tecla.
    - O evento keydown é disparado, chamando a função playSound.

2. Execução de playSound:

    - Obtém o código da tecla pressionada.
    - Seleciona os elementos de áudio e tecla correspondentes.
    - Reinicia e toca o áudio.
    - Executa animações específicas se a tecla for 'E', 'R', 'K' ou 'I'.
    - Adiciona a classe playingClass à tecla para iniciar a animação.

3. Transições de Animação:

    - A animação é aplicada aos elementos visuais.
    - Quando a transição da animação termina, o evento transitionend é disparado.

4. Remoção de Transições:

    - removeCrashRideTransition, removeHitHatTopTransition e removeKeyTransition redefinem as propriedades dos elementos e removem a classe playingClass.

Contribuição:
Contribuições são bem-vindas! Se você encontrar bugs ou quiser sugerir melhorias, sinta-se à vontade para abrir uma issue ou criar um pull request no repositório GitHub.

Licença:
Este programa é licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter detalhes.

Referência: https://github.com/tluis9/bateriaJS/blob/master/README.md