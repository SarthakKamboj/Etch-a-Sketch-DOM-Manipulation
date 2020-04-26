const container = document.querySelector(".container")

let createGrid = (width, height) => {
    const boxWidth = 100 / width
    const boxHeight = 100/ height
    for(let i = 0; i < (width*height); i++) {
        let div = document.createElement("div")
        div.classList.add("box")
        div.style.width = `${boxWidth}%`
        div.style.height = `${boxHeight}%`
        div.addEventListener("mouseover",()=>{
            div.classList.add("black-bck")
        })
        container.appendChild(div)
    }
}

let resetBoard = () => {
    console.log(container.children)
    let boxes = [...container.children];
    boxes.forEach(box=>{
        // box.classList.remove("black-bck")
        container.removeChild(box)
    })
    let width = prompt("How many columns do you want?")
    let height = prompt("How many rows do you want?")

    createGrid(width,height)
}

document.querySelector(".btn").addEventListener("click",()=>{
    resetBoard()
})

createGrid(16,16)