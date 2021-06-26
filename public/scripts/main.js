import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".question-actions a.check") 
checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
})

// MODAL FOR DELETE BUTTON
const deleteButton = document.querySelectorAll(".question-actions a.delete")
deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
 })

function handleClick(event, check = true){
    event.preventDefault()

    const description = check ? "Tem certeza que deseja" : "excluir esta pergunta?"

    modalTitle.innerHTML = check ? "Marcar como lida": "Excluir esta pergunta"
    modalDescription.innerHTML = `${description} marcar como lida esta pergunta?`
    modalButton.innerHTML = check ? "Marcar como lida" : "Sim, excluir"

    check ? modalButton.style.backgroundColor = "var(--blue)" : modalButton.style.backgroundColor = "var(--pink)"

    modal.open()
}

