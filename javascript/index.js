// Link the js with the html-for DOM manipilatuion
const container = document.querySelector(".container");

const generateRandomColor = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    const color = `rgb(${red}, ${green}, ${blue})`
    
    return color
}


const onMouseOver = () => {
    const divBlock = document.createElement("div")
    const color  = generateRandomColor() 

    divBlock.style.backgroundColor = color; 
    divBlock.className = "block"    
    container.appendChild(divBlock);
}


container.addEventListener("mousemove", onMouseOver);