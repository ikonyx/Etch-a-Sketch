const container = document.querySelector('#grid');
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

    const squares = document.querySelectorAll('div.squares');

    for (const square of squares) {
         square.addEventListener('mouseenter', pickColor)
    }
    
    function pickColor(event) {
    event.target.style.backgroundColor = color.value;
    };

};

createGrid();


const GridSizeBtn  = document.createElement('button');
GridSizeBtn.textContent = 'Grid Size';
buttons.appendChild(GridSizeBtn);

GridSizeBtn.addEventListener('click', changeGridSize);

function changeGridSize() {
    
    let newGridSize
    while (true) { 
        newGridSize = parseInt(prompt("Please enter a number between 2 and 100"));
        
        if (!isNaN(newGridSize) && 2 <= newGridSize && newGridSize <= 100) {
            gridSize = newGridSize;
            document.querySelector('#grid').replaceChildren();
            createGrid();
            break;
        } else if (newGridSize === null) {
            break;
        }     
    }
}