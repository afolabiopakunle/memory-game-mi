let cardsArray = [
    {
        name: 'cheeseburger',
        location: './images/cheeseburger.png'
    },
    {
        name: 'cheeseburger',
        location: './images/cheeseburger.png'
    },
    {
        name: 'pizza',
        location: './images/cheeseburger.png'
    },
]

let grid = document.getElementById('grid');

function loadCards() {
    let card = document.createElement('img');
    card.setAttribute('src', './images/blank.png');
    for(let i = 0; i < cardsArray.length; i++) {
        grid.appendChild(card)
    }
}

loadCards();