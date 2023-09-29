
let buttons = document.querySelectorAll('button')
for (let i = 0; i < buttons.length; i++) {
    let currentButton = buttons[i]
    currentButton.addEventListener('click', (event) => {
        let purpose = ''
        let id = event.target.id
        if (id === 'color') purpose = 'Pink'
        else if (id === 'place') purpose = 'New York'
        else if (id === 'ritual') purpose = 'Buddhism'
        alert(`${event.target.innerHTML} ${purpose}.`)
    })
}

for (let i = 0; i < buttons.length; i++) {
    let currentButton = buttons[i]
    currentButton.addEventListener('mouseover', () => {
        currentButton.style.width = '150px'
        currentButton.style.height = '40px'
        currentButton.style.background = 'yellow'
    }) 
    currentButton.addEventListener('mouseout', () => {
        currentButton.style.width = 'auto'
        currentButton.style.height = '35px'
        currentButton.style.background = 'white' 
    })
}

