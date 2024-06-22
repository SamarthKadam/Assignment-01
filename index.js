const scale = 10; 
const canvas = document.querySelector("#canvas");
const rangeInput = document.querySelector('#rangeInput');
const rangeValueDiv = document.querySelector('#rangeValue');
const ctx = canvas.getContext("2d");
//selecting the html elements and defining values

const sequence = [0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62,
    42, 63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78, 38,
    79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29, 88, 28, 89, 27, 90, 26, 91
].map(item => item * scale);
// Recamán sequence scaled by 'scale' constant defined at the top

const drawRecaman = (limit) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);          ///clearReact is used to clear previousDrawings
    ctx.beginPath();                                           //beginPath is used to begin the drawing Paths
    for (let i = 0; i < limit; i++) {
        const x1 = sequence[i];
        const x2 = sequence[i + 1];
        const radius = Math.abs(x2 - x1) / 2;
        const centerX = (x1 + x2) / 2;
        const centerY = canvas.height / 2;

        //Get all the values


        //Draw semicircle clockwise or anticlockwise depending upon the arc based index parity
        if (i % 2 === 0) {
            ctx.arc(centerX, centerY, radius, Math.PI, 0, true); 
        } else {
            ctx.arc(centerX, centerY, radius, 0, Math.PI, true);
        }
    }
    ctx.stroke();         //stroke draws the defined path
}

const onInputChangeHandler = (value) => {
    rangeValueDiv.innerText = value;
    drawRecaman(Number(value));
}

rangeInput.addEventListener('input', e => onInputChangeHandler(e.target.value));   //Whenever there is change in slider making it to call event handler calling drawRecaman function

drawRecaman(Number(rangeInput.value)); //Initially call the drawRecaman function with default value that is 65
