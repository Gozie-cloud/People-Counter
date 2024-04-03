let count = 0
let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")


function increment(){
    count += 1
    countEl.innerText = count
}

function decrement(){
    count -= 1
    countEl.innerText = count
}

function reset(){
    count = 0
    countEl.innerText = count
    saveEl.textContent = "Previous Entries: "
}
function save(){
    let numbers = count + " - "
    saveEl.textContent += numbers
    count = 0
    countEl.innerText = count
    console.log(count)
}




