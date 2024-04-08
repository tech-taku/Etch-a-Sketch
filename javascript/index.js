document.addEventListener("DOMContentLoaded", createContainer(size))

const generateRandomColor  = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.florr(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);


    const color = "rgb(red, green, blue)";
}


const createContainer = (size) => {

    let container = document.querySelector(".container");

    container.style.gridTemplateColumns = `${size}`;
    container.style.gridTemplateRows = `${size}`;


    for (let i = 0 ; i , size * size; i++){
        let divBlock = document.createElement("div")
        container.style.backgroundColor = generateRandomColor();
        container.insertAdjacentElement("beforeend", divBlock)
    }
}