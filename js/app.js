document.addEventListener('DOMContentLoaded', function() {
    // Adiciona um evento que será executado quando o DOM estiver completamente carregado.
    const swiper = new Swiper('.swiper', {
        // Cria uma nova instância do Swiper (carrossel), associada ao contêiner com a classe 'swiper'.
        direction: 'horizontal',
        // Define a direção de transição dos slides como horizontal.
        loop: false,
        // Define que o carrossel não irá repetir os slides (não fará looping).

        pagination: {
            el: '.swiper-pagination'
            // Configura a paginação (indicadores de slide) utilizando o seletor '.swiper-pagination'.
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
            // Define os botões de navegação para avançar ('.swiper-button-next') e retroceder ('.swiper-button-prev') os slides.
        }
    });

    document.addEventListener('keydown', function (event) {
        // Adiciona um listener para eventos de teclado.
        if(event.key === 'ArrowLeft') {
            swiper.slidePrev();
            // Se a tecla pressionada for a seta para a esquerda, move para o slide anterior.
        } else if(event.key === 'ArrowRight') {
            swiper.slideNext();
            // Se a tecla pressionada for a seta para a direita, move para o próximo slide.
        }
    });

    const gameInput = document.getElementById('gameInput');
    // Seleciona o elemento de entrada de texto com o ID 'gameInput'.

    gameInput.addEventListener('keypress', function (event){
        // Adiciona um evento que será disparado quando uma tecla for pressionada no campo de entrada.
        if(event.key === 'Enter'){
            // Verifica se a tecla pressionada foi 'Enter'.
            let searchGame = gameInput.value.trim().toUpperCase();
            // Obtém o valor do campo de entrada, remove espaços em branco nas extremidades e converte para maiúsculas.

            switch (searchGame) {
                case 'MARIO':
                    swiper.slideTo(0); // Primeiro slide (índice 0)
                    break;
                case 'POKEMON':
                    swiper.slideTo(1); // Segundo slide (índice 1)
                    break;
                case 'ZELDA':
                    swiper.slideTo(2); // Terceiro slide (índice 2)
                    break;
                default:
                    alert('Jogo não foi encontrado');
                    break;
            }
            
        }
    });
});


const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', () => {
  modal.style.display = 'flex';
});


closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});


window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const modal1 = document.getElementById('modal1');
const openModal1 = document.getElementById('openModal1');
const closeModal1 = document.getElementById('closeModal1');

openModal1.addEventListener('click', () => {
  modal1.style.display = 'flex';
});


closeModal1.addEventListener('click', () => {
  modal1.style.display = 'none';
});


window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal1.style.display = 'none';
  }
});

const modal2 = document.getElementById('modal2');
const openModal2 = document.getElementById('openModal2');
const closeModal2 = document.getElementById('closeModal2');

openModal2.addEventListener('click', () => {
  modal2.style.display = 'flex';
});


closeModal2.addEventListener('click', () => {
    modal2.style.display = 'none';
});


window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal2.style.display = 'none';
  }
});
