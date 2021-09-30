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
    {
        name: 'milkshake',
        location: './images/milkshake.png'
    },
    {
        name: 'milkshake',
        location: './images/milkshake.png'
    },
    {
        name: 'ice-cream',
        location: './images/ice-cream.png'
    },
    {
        name: 'ice-cream',
        location: './images/ice-cream.png'
    },
    {
        name: 'hotdog',
        location: './images/hotdog.png'
    },
    {
        name: 'hotdog',
        location: './images/hotdog.png'
    },
    {
        name: 'fries',
        location: './images/fries.png'
    },
    {
        name: 'fries',
        location: './images/fries.png'
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