document.addEventListener("DOMContentLoaded", function () {
    let popUpButton = document.querySelector("#popup");
    popUpButton.addEventListener("click", function () {
        const size = getSize()
        createContainer(size);
    })

})

function createContainer(size) {

    let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size

    for (let i = 0; i < numDivs; i++) {
        let divBlock = document.createElement("div")
        divBlock.addEventListener("mouseover", () => {
            divBlock.style.backgroundColor = generateRandomColor();
        })
        container.insertAdjacentElement("beforeend", divBlock)
    }
}

function getSize() {
    let input = prompt("What your desired grid size? (Valid Number)");
    let message = document.querySelector("#message");

    if (input === "") {
        message.textContent = "Please provide a number"

    } else if (input < 0 || input > 100) {
        message.textContent = "Provide a number between 1 and 100";

    } else {
        message.textContent = "Go Ahead and Play.";
    }
    return input;
}
function generateRandomColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);


    const color = `rgb(${red}, ${green}, ${blue})`;

    return color
}


