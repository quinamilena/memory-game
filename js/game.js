const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
  'black_widow',
  'captain_america',
  'doctor_strange',
  'hulk',
  'iron_man',
  'scarlet_witch',
  'spider_man',
  'thor',
  'vision',
  'winter_soldier',
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;

  return element;
};

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if (disabledCards.length === 20) {
    clearInterval(this.loop);

    alert(
      `Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`
    );
  }
};

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if (firstCharacter === secondCharacter) {
    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    setTimeout(() => {
      checkEndGame();
    }, 500);
  } else {
    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';
    }, 500);
  }
};

const revealCard = ({ target }) => {
  const parentNode = target.parentNode;

  if (parentNode.className.includes('reveal-card')) return;

  if (firstCard === '') {
    parentNode.classList.add('reveal-card');
    firstCard = parentNode;
  } else if (secondCard === '') {
    parentNode.classList.add('reveal-card');
    secondCard = parentNode;

    checkCards();
  }
};

const createCard = (character) => {
  const card = createElement('div', 'card');
  const front = createElement('div', 'face front');
  const back = createElement('div', 'face back');

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener('click', revealCard);
  card.setAttribute('data-character', character);

  return card;
};

const loadGame = () => {
  const duplicateCharacters = [...characters, ...characters].sort(
    () => Math.random() - 0.5
  );

  duplicateCharacters.forEach((character) => {
    const card = createCard(character);

    grid.appendChild(card);
  });
};

const startTime = () => {
  this.loop = setInterval(() => {
    const currentTime = Number(timer.innerHTML);
    timer.innerHTML = currentTime + 1;
  }, 1000);
};

window.onload = () => {
  const playerName = localStorage.getItem('player');

  spanPlayer.innerHTML = playerName;

  startTime();
  loadGame();
};
