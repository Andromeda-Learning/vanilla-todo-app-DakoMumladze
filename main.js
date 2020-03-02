let inputText = document.querySelector('.main-input')
let itemsCont = document.querySelector('.items')

function addItem() {
    createListItem()
    clearInput()
}

function createListItem() {
    if(inputText.value !== "") {
        let createdItem = document.createElement('li')
        let createdItemText = document.createTextNode(inputText.value)
        createdItem.appendChild(createdItemText)
        itemsCont.appendChild(createdItem)
    }
    else {
        inputText.classList.add('error')
    }
}

function clearInput() {
    inputText.value = ""
}