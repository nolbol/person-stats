function renderColor (color) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    return colorDiv
}

function renderListItem (list, label) {
    const listItem = document.createElement('li')
    listItem.textContent = `${label}${list}`
    return listItem
}


function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personSecond.value
    const color = f.favoriteColor.value

    const div = document.querySelector('#stats')

    const list = document.createElement('ul')

    const nameItem = renderListItem(name, "Name: ")
    list.appendChild(nameItem)
    
    const ageItem = renderListItem(age, 'Age: ')
    list.appendChild(ageItem)

    const colorItem = renderListItem(color, 'Color: ')
    const colorDiv = renderColor(color)
    colorItem.appendChild(colorDiv)
    
    list.appendChild(colorItem)

    div.appendChild(list)
}







const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)