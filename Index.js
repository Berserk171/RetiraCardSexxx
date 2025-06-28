// Sugestões e melhorias para o site de "Retirar Carta"

/**
 * 1. ANIMAÇÃO NA CARTA:
 * Adiciona uma animação suave de entrada para a carta ao ser exibida.
 */
imagem: "https://source.unsplash.com/600x400/?palavras-chave"

function animateCard() {
    const card = document.getElementById('card');
    card.style.opacity = 0;
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
      card.style.transition = 'all 0.4s ease';
      card.style.opacity = 1;
      card.style.transform = 'scale(1)';
    }, 50);
  }
  
  /**
   * 2. EFEITO DE SOM SUAVE:
   * Opcional: incluir um som leve ao revelar uma carta.
   */
  function tocarSom() {
    const audio = new Audio('https://www.myinstants.com/media/sounds/pop.mp3'); // exemplo de som pop
    audio.volume = 0.2;
    audio.play();
  }
  
  /**
   * 3. PROBABILIDADE MAIOR PARA CARTAS 29 a 49:
   * Multiplica essas cartas para aumentar ligeiramente a chance.
   */
  function gerarCartasComPeso(cartas) {
    const cartasPonderadas = [];
    cartas.forEach((carta, index) => {
      const isFavorita = index + 1 >= 29 && index + 1 <= 49;
      const peso = isFavorita ? 2 : 1; // peso maior para as favoritas
      for (let i = 0; i < peso; i++) {
        cartasPonderadas.push(carta);
      }
    });
    return cartasPonderadas;
  }
  
  /**
   * 4. FUNÇÃO PRINCIPAL DE RETIRAR A CARTA:
   */
  function retirarCarta() {
    const cartasPonderadas = gerarCartasComPeso(cartas);
    const index = Math.floor(Math.random() * cartasPonderadas.length);
    const carta = cartasPonderadas[index];
    const cardElement = document.getElementById('card');
    const [titulo, descricao] = carta.split(' — ');
    cardElement.innerHTML = `<h2>${titulo}</h2><p>${descricao}</p>`;
    animateCard();
    tocarSom();
  }