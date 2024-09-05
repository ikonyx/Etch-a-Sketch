const container = document.querySelector('#container');
let gridSize = 16;
const containerSize = 700;

function createGrid() {
    for (let i=0; i < gridSize; i++) {
        for (let j=0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add("squares");
            square.style.width = (containerSize/gridSize) +'px';
            square.style.height = (containerSize/gridSize) +'px';
            container.appendChild(square);
        } 
    }  
}

createGrid();
