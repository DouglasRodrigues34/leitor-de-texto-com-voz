const main = document.querySelector('main')
const buttonInsertText = document.querySelector('.btn-toggle')
const divTextBox = document.querySelector('.text-box')
const closeDivTextBox = document.querySelector('.close')

const humanExpressions = [
    { img: './img/drink.jpg', text: 'Estou com sede' },
    { img: './img/food.jpg', text: 'Estou com fome' },
    { img: './img/tired.jpg', text: 'Estou cansado' },
    { img: './img/hurt.jpg', text: 'Estou machucado' },
    { img: './img/happy.jpg', text: 'Estou feliz' },
    { img: './img/angry.jpg', text: 'Estou com raiva' },
    { img: './img/sad.jpg', text: 'Estou triste' },
    { img: './img/scared.jpg', text: 'Estou assustado' },
    { img: './img/outside.jpg', text: 'Quero ir lá fora' },
    { img: './img/home.jpg', text: 'Quero ir para casa' },
    { img: './img/school.jpg', text: 'Quero ir para escola' },
    { img: './img/grandma.jpg', text: 'Quero ver a vovó' },
]

const createExpressionBox = ({img, text}) => {
    const div = document.createElement('div')
    
    div.classList.add('expression-box')
    div.innerHTML = `
        <img src="${img}" alt="${text}">
        <p class="info">${text}</p>
    `

    main.appendChild(div)
}

humanExpressions.forEach(createExpressionBox)

buttonInsertText.addEventListener('click', () => {
    divTextBox.classList.add('show')
})

closeDivTextBox.addEventListener('click', () => {
    divTextBox.classList.remove('show')
})