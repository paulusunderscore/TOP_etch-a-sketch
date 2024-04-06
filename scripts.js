const main = document.querySelector('#main');
main.style.display = 'flex';
main.style.justifyContent = 'space-evenly';

const container = document.querySelector('#container');
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.width = '720px';
container.style.height = '720px';
container.style.flexWrap = 'wrap';

let n = 1;
const gridElements = [];

function createGrid(size){
    let gridSize = 720 / size;
    //loop to create rows and columns for grid
    for (let i = 0; i < size; i++){
        gridElements[i] = [];
        for (let j = 0; j < size; j++){
            const grid = document.createElement('div');
            grid.className = `grid${n}`;
            grid.style.outline = "1px solid black";
            grid.style.flexBasis = gridSize + 'px';
            container.appendChild(grid);
            gridElements[i][j] = grid;
        }
    }

    const grid = document.querySelectorAll(`.grid${n}`);
    console.log(grid.length);

    let opac = [];
    //Loop to detect all grid events
    for (let i = 0; i < grid.length; i++){
        opac[i] = 0.2;

        grid[i].addEventListener('mouseover', (e) => {
            grid[i].style.backgroundColor = `rgba(0, 0, 0, ${opac[i]})`;
            opac[i] += 0.2;
    });
}
    return gridElements;
}

createGrid(36);

const leftSide = document.createElement('div');
main.insertBefore(leftSide, main.firstChild);

const boxSize = document.createElement('div');
main.insertBefore(boxSize, main.firstChild);

const boxSizeTitle1 = document.createElement('div');
boxSizeTitle1.textContent = 'ETCH A SKETCH';
boxSizeTitle1.style.fontFamily = 'Courier New';
boxSizeTitle1.style.fontSize = '72px';
boxSize.appendChild(boxSizeTitle1);

const boxSizeTitle2 = document.createElement('div');
boxSizeTitle2.textContent = 'Insert grid size (1-100)';
boxSize.appendChild(boxSizeTitle2);

const boxSizeInput = document.createElement('input');
boxSize.appendChild(boxSizeInput);

const boxSizeButton = document.createElement('button');
boxSizeButton.textContent = 'Reset';
boxSize.appendChild(boxSizeButton);

boxSizeButton.addEventListener('click', (e) => {
    if (boxSizeInput.value >= 1 && 
        boxSizeInput.value <= 100){
            //loop row and column to select all grid classes using gridElements
            for(let i = 0; i < gridElements.length; i++){
                for(let j = 0; j < gridElements[i].length; j++){
                    gridElements[i][j].remove();
                }
            }
            createGrid(boxSizeInput.value);
        }
    else {
        alert('Grid size error! Please check your value!');
    }
});

