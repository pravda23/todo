const arr = []

// selectors 
const input = document.querySelector('.input')
const inputBtn = document.querySelector('.inputBtn')
const list = document.querySelector('.list')

// event listeners
inputBtn.addEventListener('click', addEntry) // add new item
addEventListener('click', checkDelete) // check or delete item

// add single entry
function addEntry(e) {
    e.preventDefault();

    // validate text entry
    input.placeholder = ''
    if (input.value === '') {
        input.placeholder = "Please enter something."
    } else {

        // create single entry
        const singleEntry = document.createElement('div')
        singleEntry.classList.add('singleEntry')

        // create li 
        const entryText = document.createElement('li')
        entryText.classList.add('entryText')
        entryText.innerHTML = input.value
        singleEntry.appendChild(entryText)
        arr.push({ task: input.value, status: 'to do' })

        // create checked button 
        const checkedButton = document.createElement('button')
        checkedButton.classList.add('btn-checked')
        checkedButton.innerHTML = '<i class="fas fa-check"></i>'
        singleEntry.appendChild(checkedButton)

        // create trash button
        const trashButton = document.createElement('button')
        trashButton.classList.add('btn-trash')
        trashButton.innerHTML = '<i class="fas fa-trash"></i>'
        singleEntry.appendChild(trashButton)

        // append singleEntry to list container, clear form
        list.appendChild(singleEntry)
        input.value = ""
    }
}
// check item
function checkDelete(e) {

    if (e.target.classList.contains('btn-checked')) {
        e.target.classList.toggle('btn-done')

        for (f of Object.values(arr)) {
            if (e.target.parentElement.textContent == f.task) {
                if (f.status == 'to do') {
                    Object.values(f.status = 'done')
                } else {
                    Object.values(f.status = 'to do')
                }
            }
        }
        console.log(arr)
    }
    // delete item
    if (e.target.classList.contains('btn-trash')) {

        e.target.parentElement.remove()
        const indexOfItemToRemove = arr.indexOf(e.target.parentElement.textContent)
        arr.splice(indexOfItemToRemove, 1)
        console.log(arr)
    }
}