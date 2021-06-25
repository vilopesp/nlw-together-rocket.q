import Modal from './modal.js'

const modal = Modal()

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".question-actions a.check") 

checkButtons.forEach(button => {
    button.addEventListener("click", event => {
        modal.open()
    })
})

// MODAL FOR DELETE BUTTON
const deleteButton = document.querySelectorAll(".question-actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", event => {
        modal.open()
    })
})
