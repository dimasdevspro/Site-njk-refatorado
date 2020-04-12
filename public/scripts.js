const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const showorHideInfo = document.querySelector('.showorhide-info')
const showorHidePrepare = document.querySelector('.showorhide-prepare')
const showorHideInstructions = document.querySelector('.showorhide-instructions')
const info = document.querySelector('.info')
const prepare = document.querySelector('.prepare')
const instructions = document.querySelector('.instructions')

for (let card of cards) {
    card.addEventListener("click", function() {
        const pos = card.getAttribute('id')
        
        window.location.href=`/revenues/${pos}`
    })
}

showorHideInfo.addEventListener("click", function(){
    if (showorHideInfo.innerHTML === 'Esconder') {
        info.style.display ='none'
        showorHideInfo.innerHTML ='Mostrar'
    } else if (showorHideInfo.innerHTML === 'Mostrar') {
        info.style.display ='block'
        showorHideInfo.innerHTML='Esconder'
    }
})

showorHidePrepare.addEventListener("click", function(){
    if (showorHidePrepare.innerHTML === 'Esconder') {
        prepare.style.display ='none'
        showorHidePrepare.innerHTML='Mostrar'
    } else if (showorHidePrepare.innerHTML === 'Mostrar') {
        prepare.style.display ='block'
        showorHidePrepare.innerHTML='Esconder'
    }
})

showorHideInstructions.addEventListener("click", function(){
    if (showorHideInstructions.innerHTML === 'Esconder') {
        instructions.style.display ='none'
        showorHideInstructions.innerHTML='Mostrar'
    } else if (showorHideInstructions.innerHTML === 'Mostrar') {
        instructions.style.display ='block'
        showorHideInstructions.innerHTML='Esconder'
    }
})