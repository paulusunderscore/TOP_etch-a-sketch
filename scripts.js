const main = document.querySelector('#main');
main.style.display = 'flex';
main.style.justifyContent = 'center';

const container = document.querySelector('#container');
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.width = '720px';
container.style.height = '720px';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';


function createGrid(size){
    let gridSize = 720 / size;
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            const grid = document.createElement('div');
            grid.className = 'grid';
            //grid.style.backgroundColor = 'black';
            grid.style.outline = "1px solid black";
            //grid.textContent = x;
            //grid.style.display = 'flex';
            //grid.style.flexDirection = 'column';
            grid.style.flexBasis = gridSize + 'px';

            container.appendChild(grid);
        }
    }
}


createGrid(100);