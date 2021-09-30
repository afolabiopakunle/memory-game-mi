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
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

cardsArray = cardsArray.sort(() => 0.5 - Math.random());
result = document.getElementById('result');
result.textContent = 0;
cardNameList = [];
cardIdList = [];
cardsWon = 0
function flipCard() {
    cardId = this.getAttribute('id');
    if(document.getElementById(cardId).getAttribute('src') === './images/white.png') {
        alert('You can\t select the selected');
        return;
    }
    cardName = cardsArray[cardId].name;
    cardNameList.push(cardName)
    cardIdList.push(cardId)
    this.setAttribute('src', cardsArray[cardId].location);
    setTimeout(()=> {
        if(document.getElementById(cardId).getAttribute('src') === './image/white.png') {
            alert('You can\'t selected the selected');
            return
        }
        if(cardNameList.length === 2) {
            if(cardIdList[0] === cardIdList[1]) {
                alert('You can\'t be picking the same card');
                document.getElementById(cardIdList[0]).setAttribute('src', './images/blank.png');
                cardIdList = []
                cardNameList = [];
                return
            }
            if(cardNameList[0] === cardNameList[1]) {
                alert("You matched!");
                document.getElementById(cardIdList[0]).setAttribute('src', './images/white.png');
                document.getElementById(cardIdList[1]).setAttribute('src', './images/white.png');
                cardIdList = []
                cardNameList = [];
                cardsWon++
                result.textContent = cardsWon;
            } else {
            alert('Sorry, you missed');
            document.getElementById(cardIdList[0]).setAttribute('src', './images/blank.png');
            document.getElementById(cardIdList[1]).setAttribute('src', './images/blank.png');
            cardIdList = [];
            cardNameList = [];
            cardsWon--
                result.textContent = cardsWon;
        }

        
        }



    }, 200)

}
loadCards();