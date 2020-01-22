//get container
const container = document.getElementById('container');
//array with colors
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
//set constant to 500 for square grid
const SQUARES_NUM = 500;

//create the 500 squares
for(let i = 0; i < SQUARES_NUM; i++){
    //create new div (square)
    const square = document.createElement('div');
    //add class of square to that new div
    square.classList.add('square');
    //react to hover
    square.addEventListener('mouseover', () => {
        setColorToEl(square);
    })
    //revert once mouse is no longer hoverin
    square.addEventListener('mouseout', () => {
        removeColorFromEl(square);
    })

    container.appendChild(square);

}


function setColorToEl(element){
    //generate a random color
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColorFromEl(element){
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px black`;
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}