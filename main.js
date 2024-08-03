const MATCHED_CLASS = 'matched';

let wordArray = ['Dog', 'Cat', 'Lion', 'Tiger', 'Elephant', 'Wolf', 'Black', 'Red', 'Blue', 'Yellow', 'White', 'Green'];

const mainDiv = document.querySelector('.card-container');
const resetButton = document.querySelector('.resetBtn');

let gameCard = wordArray.concat(wordArray);
let selectedCards = [];

function shuffleCard() {
    for (let i = gameCard.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        let temp = gameCard[i];
        gameCard[i] = gameCard[j];
        gameCard[j] = temp;
    }
}

function createCard() {
    mainDiv.innerHTML = '';
    selectedCards = [];

    for (let i = 0; i < gameCard.length; i++) {
        const div = document.createElement('div');
        const divText = document.createElement('p');
        div.dataset.name = gameCard[i];
        div.classList.add('card');
        divText.innerText = gameCard[i];
        div.appendChild(divText);
        mainDiv.appendChild(div);

        div.addEventListener('click', () => {
            if (divText.classList.contains('show') || selectedCards.length === 2) return;

            divText.classList.add('show');
            selectedCards.push(div); // Store the div element itself, not just the text

            if (selectedCards.length === 2) {
                const [card1, card2] = selectedCards;
                const [text1, text2] = selectedCards.map(card => card.dataset.name);

                if (text1 === text2) {
                    card1.classList.add(MATCHED_CLASS);
                    card2.classList.add(MATCHED_CLASS);
                } else {
                    setTimeout(() => {
                        card1.querySelector('p').classList.remove('show');
                        card2.querySelector('p').classList.remove('show');
                    }, 1000);
                }

                selectedCards = [];
            }
        });
    }
}

shuffleCard();
createCard();

resetButton.addEventListener('click', () => {
    shuffleCard();
    createCard();
});
