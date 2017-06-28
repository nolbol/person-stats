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

function renderList (name, age, color) {
    const list = document.createElement('ul')
    const div = document.querySelector('#stats')
    const nameItem = renderListItem(name, "Name: ")
    const ageItem = renderListItem(age, 'Age: ')
    const colorItem = renderListItem(color, 'Color: ')
    const colorDiv = renderColor(color)
    colorItem.appendChild(colorDiv)
    list.appendChild(nameItem)
    list.appendChild(ageItem)
    list.appendChild(colorItem)
    return list
}


function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personSecond.value
    const color = f.favoriteColor.value

    const list = renderList(name, age, color)
    const div = document.querySelector('#stats')




    div.appendChild(list)
}









const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)