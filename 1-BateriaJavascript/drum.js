// Classe CSS que será adicionada durante a animação de uma tecla
const playingClass = "playing";

// Obtém os elementos do prato Crash e do Hi-Hat superior pelo ID
const crashRide = document.getElementById("crash-ride");
const hitHatTop = document.getElementById("hihat-top");

// Função para animar o prato Crash ou Ride
const animateCrashOrRide = () => {
  crashRide.style.transform = "rotate(0deg) scale(1.5)";
};

// Função para animar o Hi-Hat fechado
const animateHitHatClosed = () => {
  hitHatTop.style.top = "175px";
};

// Função principal para tocar o som e animar os elementos quando uma tecla é pressionada
const playSound = (e) => {
  // Obtém o código da tecla pressionada
  const keycode = e.keyCode;

  // Seleciona o elemento da tecla correspondente
  const keyElement = document.querySelector(`div[data-key="${keycode}"]`);

  // Se não houver elemento correspondente, retorna sem fazer nada
  if (!keyElement) return;

  // Seleciona o elemento de áudio correspondente
  const audioElement = document.querySelector(`audio[data-key="${keycode}"]`);

  // Reinicia o áudio e toca o som
  audioElement.currentTime = 0;
  audioElement.play();

  // Animações específicas para certos códigos de tecla
  switch (keycode) {
    // Anima o prato Crash ou Ride se as teclas 'E' (69) ou 'R' (82) forem pressionadas
    case 69:
    case 82:
      animateCrashOrRide();
      break;
    // Anima o Hi-Hat fechado se as teclas 'K' (75) ou 'I' (73) forem pressionadas
    case 75:
    case 73:
      animateHitHatClosed();
      break;
  }

  // Adiciona a classe de animação à tecla pressionada
  keyElement.classList.add(playingClass);
};

// Remove a transição do prato Crash/Ride após a animação terminar
const removeCrashRideTransition = (e) => {
  // Verifica se a propriedade que terminou a transição é a 'transform'
  if (e.propertyName !== "transform") return;

  // Redefine a transformação do prato Crash/Ride
  e.target.style.transform = "rotate(-7.3deg) scale(1.5)";
};

// Remove a transição do Hi-Hat superior após a animação terminar
const removeHitHatTopTransition = (e) => {
  // Verifica se a propriedade que terminou a transição é 'top'
  if (e.propertyName !== "top") return;

  // Redefine a posição do Hi-Hat superior
  e.target.style.top = "165px";
};

// Remove a classe de animação da tecla após a animação terminar
const removeKeyTransition = (e) => {
  // Verifica se a propriedade que terminou a transição é 'transform'
  if (e.propertyName !== "transform") return;

  // Remove a classe de animação da tecla
  e.target.classList.remove(playingClass);
};

// Seleciona todas as teclas e adiciona um evento para remover a transição de cada tecla
const drumKeys = Array.from(document.querySelectorAll(".key"));
drumKeys.forEach((key) => {
  key.addEventListener("transitionend", removeKeyTransition);
});

// Adiciona eventos para remover a transição dos pratos e Hi-Hat após a animação terminar
crashRide.addEventListener("transitionend", removeCrashRideTransition);
hitHatTop.addEventListener("transitionend", removeHitHatTopTransition);

// Adiciona evento para tocar o som quando uma tecla é pressionada
window.addEventListener("keydown", playSound);