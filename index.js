function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const stats = document.querySelector('#stats')
    const second = f.personSecond.value
    const color = f.favoritecolor.value
    f.style.color = color
    const list = document.createElement('ul')

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${name}`
    list.appendChild(nameItem)

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age:${age}`
    list.appendChild(ageItem)

    const colorItem = document.createElement('li')
    colorItem.textContent = `Favorite Color: ${color}`
    list.appendChild(colorItem)

    stats.innerHTML = name + "; second" + second
    //div.innerHTML = ${name}, second ${second}
    
}



const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)