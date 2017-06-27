function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const stats = document.querySelector('#stats')
    const second = f.personSecond.value
    const color = f.favoritecolor.value
    f.style.color = color
    //checking the font color to see if its valid

    stats.innerHTML = name + "; second" + second
    //div.innerHTML = ${name}, second ${second}
    
}



const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)