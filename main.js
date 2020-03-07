let inputText = document.querySelector('.main-input')
let itemsCont = document.querySelector('.items')

function addItem(event) {
    createListItem()
    clearInput()
    event.preventDefault()
}

function createListItem() {
    if (inputText.value.trim() !== "") {
        const inputTextTrimmed = inputText.value.trim()
        const createdItem = document.createElement('li')
        const deleteBtn = document.createElement('button')
        const deleteBtnText = document.createTextNode('delete')
        const createdItemText = document.createTextNode(inputTextTrimmed)
        createdItem.appendChild(createdItemText)
        deleteBtn.appendChild(deleteBtnText)
        createdItem.appendChild(deleteBtn)
        itemsCont.appendChild(createdItem)
        document.body.appendChild(itemsCont)
        deleteBtn.addEventListener('click',deleteListItem)
        inputText.classList.remove('error')
    } else {
        inputText.classList.add('error')
    }
}

function clearInput() {
    inputText.value = ""
}


function deleteListItem() {
    itemsCont.removeChild(this.parentNode)
}


