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
    //react to hover by getting random calor
    square.addEventListener('mouseover', () => {
        setColorToEl(square);
    })
    //revert once mouse is no longer hoverin
    square.addEventListener('mouseout', () => {
        removeColorFromEl(square);
    })
    //add the square
    container.appendChild(square);

}

//generate random color on mouseover
function setColorToEl(element){
    // call function to generate a random color
    const color = getRandomColor();
    //change square bcg color to random color
    element.style.background = color;
    //change box shadow to be that of color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
//remove color after mouseover
function removeColorFromEl(element){
    //revert square bcg
    element.style.background = '#1d1d1d';
    //revert box shadow to none
    element.style.boxShadow = `0 0 2px black`;
}
// generate random color
function getRandomColor(){
    //get a new random color from array length
    return colors[Math.floor(Math.random() * colors.length)];
}
