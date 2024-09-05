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
};

createGrid();

const squares = document.querySelectorAll('div.squares');

for (const square of squares) {
    square.addEventListener('mouseenter', pickColor)
  }
function pickColor(event) {
    event.target.style.backgroundColor = color.value;
};


    