const main = document.querySelector('#main');
main.style.display = 'flex';
main.style.justifyContent = 'center';

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
    console.log('row :' + gridElements.length);
    console.log('column :' + gridElements[0].length);
    const grid = document.querySelectorAll(`.grid${n}`);
    console.log(grid.length);

    //Loop to detect all grid events
    for (let i = 0; i < grid.length; i++){
        grid[i].addEventListener('mouseover', (e) => {
            grid[i].style.backgroundColor = 'black';
        });
    }
    return gridElements;
}

createGrid(50);

console.log('gridElements.length' + gridElements.length);
console.log('gridElements[0].length' + gridElements[0].length);

const boxSize = document.createElement('div');
main.insertBefore(boxSize, main.firstChild);

const boxSizeTitle = document.createElement('div');
boxSizeTitle.textContent = 'Grid Size (1-100)';
boxSize.appendChild(boxSizeTitle);

const boxSizeInput = document.createElement('input');
boxSize.appendChild(boxSizeInput);

const boxSizeButton = document.createElement('button');
boxSizeButton.textContent = 'Reset';
boxSize.appendChild(boxSizeButton);

boxSizeButton.addEventListener('click', (e) => {
    if (boxSizeInput.value >= 1 && 
        boxSizeInput.value <= 100){
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

