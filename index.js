"use strict";
class FlashCard {
    constructor(front, back) {
        this.front = front;
        this.back = back;
    }
}
class FlashCardDeck {
    constructor() {
        this.cards = [];
        this.currentIndex = 0;
    }
    addCard(front, back) {
        const card = new FlashCard(front, back);
        this.cards.push(card);
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
    drawCard() {
        if (this.currentIndex === this.cards.length) {
            this.currentIndex = 0;
        }
        const card = this.cards[this.currentIndex];
        this.currentIndex++;
        return card;
    }
}
class FlashCardApp {
    constructor() {
        this.deck = new FlashCardDeck();
        this.currentCard = {
            front: "",
            back: "",
        };
        this.isFrontSide = true;
    }
    init() {
        // Initialize the Flash Card App
        const addButton = document.querySelector("#add-card");
        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", this.handleAddCard.bind(this));
        const shuffleButton = document.querySelector("#shuffle-cards");
        shuffleButton === null || shuffleButton === void 0 ? void 0 : shuffleButton.addEventListener("click", this.handleShuffle.bind(this));
        const drawButton = document.querySelector("#draw-card");
        drawButton === null || drawButton === void 0 ? void 0 : drawButton.addEventListener("click", this.handleDrawCard.bind(this));
    }
    handleAddCard() {
        const frontInput = document.querySelector("#front-input");
        const backInput = document.querySelector("#back-input");
        if (frontInput !== null && backInput !== null) {
            this.deck.addCard(frontInput.value, backInput.value);
            frontInput.value = "";
            backInput.value = "";
        }
    }
    handleShuffle() {
        this.deck.shuffle();
        this.currentCard;
        this.isFrontSide = true;
        this.displayCard();
    }
    handleDrawCard() {
        this.currentCard = this.deck.drawCard();
        this.isFrontSide = true;
        this.displayCard();
    }
    displayCard() {
        const frontCard = document.querySelector("#front-card");
        const backCard = document.querySelector("#back-card");
        if (frontCard !== null && backCard !== null) {
            if (this.currentCard === null) {
                frontCard.textContent = "No cards in deck";
                backCard.textContent = "";
            }
            else if (this.isFrontSide) {
                frontCard.textContent = this.currentCard.front;
                backCard.textContent = "";
            }
            else {
                frontCard.textContent = "";
                backCard.textContent = this.currentCard.back;
            }
        }
    }
    flipCard() {
        this.isFrontSide = !this.isFrontSide;
        this.displayCard();
    }
    evaluateResponse() {
        const responseInput = document.querySelector("#response-input");
        if (responseInput !== null) {
            const response = responseInput.value.toLowerCase();
            const isCorrect = response === this.currentCard.back.toLowerCase();
            const resultDiv = document.querySelector("#result");
            if (resultDiv !== null)
                if (isCorrect) {
                    resultDiv.textContent = "Correct!";
                }
                else {
                    resultDiv.textContent = "Incorrect";
                }
            responseInput.value = "";
        }
    }
}
const app = new FlashCardApp();
app.init();
