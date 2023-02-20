const cardContainer = document.getElementById("card-container");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");
const responseInput = document.getElementById("response");
const submitButton = document.getElementById("submit-response");
const addButton = document.getElementById("add-card");
const shuffleButton = document.getElementById("shuffle-cards");
const drawButton = document.getElementById("draw-card");

let deck = [];
let currentIndex = -1;

function addCard() {
  const front = prompt("Enter the front of the card:");
  const back = prompt("Enter the back of the card:");
  if (front && back) {
    deck.push(new FlashCard(front, back));
  }
}

function shuffleDeck() {
  currentIndex = -1;
  deck = shuffleArray(deck);
  displayCard();
}

function drawCard() {
  currentIndex++;
  if (currentIndex >= deck.length) {
    alert("End of deck!");
    currentIndex = deck.length - 1;
  }
  displayCard();
}

function displayCard() {
  if (deck.length === 0) {
    card;
    Container.innerHTML = "No cards in deck!";
    return;
  }
  const currentCard = deck[currentIndex];
  cardFront.innerHTML = currentCard.front;
  cardBack.innerHTML = currentCard.back;
  cardBack.style.display = "none";
}

function showAnswer() {
  cardBack.style.display = "block";
}

function checkAnswer() {
  const currentCard = deck[currentIndex];
  const response = responseInput.value;
  if (response === currentCard.back) {
    alert("Correct!");
  } else {
    alert("Incorrect.");
  }
  responseInput.value = "";
}

addButton.addEventListener("click", addCard);
shuffleButton.addEventListener("click", shuffleDeck);
drawButton.addEventListener("click", drawCard);
submitButton.addEventListener("click", checkAnswer);
cardContainer.addEventListener("click", showAnswer);

class FlashCard {
  front;
  back;

  constructor(front, back) {
    this.front = front;
    this.back = back;
  }
}

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

displayCard();
