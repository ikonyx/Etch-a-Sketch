let gridSize = 16;

function createGrid() {
    const container = document.querySelector('#grid');
    const containerSize = 700;
    for (let i=0; i < gridSize; i++) {
        for (let j=0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add("squares");
            square.style.width = (containerSize/gridSize) +'px';
            square.style.height = (containerSize/gridSize) +'px';
            container.appendChild(square);
        } 
    }

    function pickColor() {
        function regularMode(event) {
            event.target.style.backgroundColor = color.value;
            };
        const squares = document.querySelectorAll('div.squares');
        for (const square of squares) {
            square.addEventListener('mouseenter', regularMode)
       }
       };
       pickColor();
    
    const colorInput = document.querySelector('#color');
    colorInput.addEventListener('click', pickColor);
};

createGrid();

const header = document.createElement('div')
header.id = 'header';
header.textContent = 'Etch a Sketch';
document.body.insertBefore(header,document.body.firstChild);


const gridSizeBtn  = document.createElement('button');
gridSizeBtn.textContent = 'Grid Size';
buttons.appendChild(gridSizeBtn);

gridSizeBtn.addEventListener('click', changeGridSize);

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

const randColorBtn  = document.createElement('button');
randColorBtn.textContent = 'Random color';
buttons.appendChild(randColorBtn);

randColorBtn.addEventListener('click', clickRandomBtn);

    
function generateRandInteger() {
    let randInteger = Math.floor(Math.random()*256);
    return randInteger;

}
function clickRandomBtn() {
    function pickRandomColor(event) {

        let red = generateRandInteger();
        let green = generateRandInteger();
        let blue= generateRandInteger();
        
        event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
        
    }
    const squares = document.querySelectorAll('div.squares');

    for (const square of squares) {
        square.addEventListener('mouseenter', pickRandomColor)
    }
}

const eraserBtn  = document.createElement('button');
eraserBtn.textContent = 'Eraser';
buttons.appendChild(eraserBtn);

eraserBtn.addEventListener('click', clickEraserBtn);

function clickEraserBtn() {
    function eraser(event) {
        event.target.style.backgroundColor = '';
    }
    const squares = document.querySelectorAll('div.squares');

    for (const square of squares) {
        square.addEventListener('mouseenter', eraser);
    }
}

const clearCanvasBtn  = document.createElement('button');
clearCanvasBtn.textContent = 'Clear Canvas';
buttons.appendChild(clearCanvasBtn);

clearCanvasBtn.addEventListener('click', clickClearBtn);

function clickClearBtn() {
    
    const squares = document.querySelectorAll('div.squares');

    for (const square of squares) {
        square.style.backgroundColor = '';
    }
}

const footer = document.createElement('footer');
footer.textContent = '© 2024 Ikonyx';
document.body.appendChild(footer);


