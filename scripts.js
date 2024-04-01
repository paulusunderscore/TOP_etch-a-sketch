const container = document.querySelector('#container');


function createGrid(size){
    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            const grid = document.createElement('div');
            grid.className = 'grid';
            grid.style.color = 'black';
            grid.style.fill = 'black';
            grid.textContent = 'a';
            container.appendChild(grid);
        }
    }
}

createGrid(16);