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
        location: './images/pizza.png'
    }, 
    {
        name: 'pizza',
        location: './images/pizza.png'
    },
]

let grid = document.getElementById('grid');

function loadCards() {
    for (let i = 0; i < cardsArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', './images/blank.png');
        card.setAttribute('id', i);
        grid.appendChild(card);
    }
}

loadCards();