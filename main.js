const inputText = document.querySelector('.main-input')
const itemsCont = document.querySelector('.items')

function addItem(event) {
    createListItem()
    clearInput()
    event.preventDefault()
}

function createListItem() {
    if (inputText.value.trim() !== "") {
        let inputTextTrimmed = inputText.value.trim()
        const li = document.createElement('li')
        const span = document.createElement('span')
        const deleteBtn = document.createElement('button')
        const deleteBtnText = document.createTextNode('delete')
        const editBtn = document.createElement('button')
        const editBtnText = document.createTextNode('edit')
        const listItemText = document.createTextNode(inputTextTrimmed)
        span.appendChild(listItemText)
        li.appendChild(span)
        deleteBtn.appendChild(deleteBtnText)
        editBtn.appendChild(editBtnText)
        li.appendChild(editBtn)
        li.appendChild(deleteBtn)
        itemsCont.appendChild(li)
        document.body.appendChild(itemsCont)
        deleteBtn.addEventListener('click',deleteListItem)
        editBtn.addEventListener('click',editListItem)
        inputText.classList.remove('error')
    } else {
        inputText.classList.add('error')
    }
}

function clearInput() {
    inputText.value = ""
}


function deleteListItem(event) {
    itemsCont.removeChild(event.target.parentNode)
}
function editListItem(event) {
    const editeditem = prompt('Edit the item')
    event.target.parentNode.childNodes[0].innerHTML = editeditem
}

