document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'candy',
            img: 'images/Candy-Candy_100x100.jpeg'
        },
        {
            name: 'candy',
            img: 'images/Candy-Candy_100x100.jpeg'
        },
        {
            name: 'flora',
            img: 'images/Flora_100x100.jpeg'
        },
        {
            name: 'flora',
            img: 'images/Flora_100x100.jpeg'
        },
        {
            name: 'luma',
            img: 'images/Luma_100x100.jpeg'
        },
        {
            name: 'luma',
            img: 'images/Luma_100x100.jpeg'
        },
        {
            name: 'shark',
            img: 'images/Me-In-My-Shark-Hoodie_100x100.jpeg'
        },
        {
            name: 'shark',
            img: 'images/Me-In-My-Shark-Hoodie_100x100.jpeg'
        },
        {
            name: 'sakura',
            img: 'images/Sakura-Picnic-_100x100.jpeg'
        },
        {
            name: 'sakura',
            img: 'images/Sakura-Picnic-_100x100.jpeg'
        },
        {
            name: 'totoro',
            img: 'images/Totoro_100x100.jpeg'
        },
        {
            name: 'totoro',
            img: 'images/Totoro_100x100.jpeg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/unicorn-card.jpeg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard) 
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/blank-card.jpeg')
            cards[optionTwoId].setAttribute('src', 'images/blank-card.jpeg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/unicorn-card.jpeg')
            cards[optionTwoId].setAttribute('src', 'images/unicorn-card.jpeg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = "Congratulations! You found them all!"
        } 
    }

    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()

})