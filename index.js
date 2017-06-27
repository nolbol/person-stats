function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const stats = document.querySelector('#stats')
    const second = f.personSecond.value
    
    stats.innerHTML = name + second

    
}



const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)