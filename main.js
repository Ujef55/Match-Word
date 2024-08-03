let wordArray = ['Dog', 'Cat', 'Lion', 'Tiger', 'Elephant', 'Wolf'];

const mainDiv = document.querySelector('.card-container');


let gameCard = wordArray.concat(wordArray);

for (let i = 0; i < gameCard.length; i++) {
    const div = document.createElement('div');
    const divText = document.createElement('p');
    div.dataset.name = gameCard[i];
    div.classList.add('card');
    divText.innerText = gameCard[i];
    div.appendChild(divText);
    mainDiv.appendChild(div);
}