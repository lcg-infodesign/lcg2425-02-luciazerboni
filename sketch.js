let cellSize = 100;
let spacer = 20; // Spazio tra le celle
let margin = 20;

let colorPalette = [
    '#360568',
    '#3A6EA5',
    '#06BCC1',
    '#A1E44D',
    '#3A4F41',
]
function setup() {
    createCanvas (windowWidth, windowHeight);
    noLoop();

    gridWidth = floor((width - margin*2)/cellSize) //floor=arrotonda per difetto
    gridHeight = floor((height - margin * 2) / cellSize);
}

function draw() {
    background("#FFFEFA");

    let offsetX = (width - gridWidth * cellSize+spacer) / 2;// Calcola lo slittamento per centrare la griglia
    let offsetY = (height - gridHeight * cellSize+spacer) / 2;

    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            // Calcola la posizione della cella
            let x = offsetX + i * (cellSize+spacer);
            let y = offsetY + j * (cellSize+spacer);

            // Imposta un colore casuale per lo sfondo della cella
            let colorfill = color(random(colorPalette));
            stroke(colorfill);
            strokeWeight(2);
            noFill();
            rect(x, y, cellSize, cellSize); // Disegna il rettangolo come sfondo della cella

            // Determina un numero casuale di cerchi per la cella
            let numCircles = floor(random(1,3)); // tra 1 e 2 cerchi

            for (let k = 0; k < numCircles; k++) {
                // Calcola la dimensione e la posizione casuale del cerchio all'interno della cella
                let circleSize = random(cellSize * 0.05, cellSize * 0.85); // dimensione tra il 5% e il 15% della cella
                let circleX = x + random(circleSize / 2, cellSize - circleSize / 2);
                let circleY = y + random(circleSize / 2, cellSize - circleSize / 2);

                // Disegna il cerchio
                let colorfill = color(random(colorPalette)); 
                stroke(colorfill);
                strokeWeight(2);
                noFill();
                ellipse(circleX, circleY, circleSize);
            }
        }
    }

    for (let k = 0; k < gridWidth; k++) {
        for (let a = 0; a < gridHeight; a++) {
            // Calcola la posizione della cella
            let x = offsetX + k * (cellSize+spacer);
            let y = offsetY + a * (cellSize+spacer);

            // Determina un numero casuale di quadrati per la cella
            let numRect = floor(random(1,2));

            for (let k = 0; k < numRect; k++) {
                // Calcola la dimensione e la posizione casuale del quadrato all'interno della cella
                let rectSize = random(cellSize * 0.05
                    , cellSize * 0.60); // dimensione tra il 5% e il 10% della cella
                let rectX = x + random(0, cellSize - rectSize);
                let rectY = y + random(0, cellSize - rectSize);

                // Disegna il quadrato
                let colorfill = random(colorPalette)
                stroke(colorfill);
                strokeWeight(2);
                noFill();
                rect(rectX, rectY, rectSize);
            }
        }
    }

    for (let b = 0; b < gridWidth; b++) {
        for (let c = 0; c < gridHeight; c++) {
            // Calcola la posizione della cella
            let x = offsetX + b * (cellSize+spacer);
            let y = offsetY + c * (cellSize+spacer);

            // Determina un numero casuale di quadrati per la cella
            let numLine = floor(random(1,3));

            for (let l = 0; l < numLine; l++) {
                // Calcola la dimensione e la posizione casuale del quadrato all'interno della cella
                let lineSize = random(cellSize * 0.20, cellSize * 0.90); // dimensione tra il 5% e il 10% della cella
                let lineX = x + random(0, cellSize - lineSize);
                let lineY = y + random(0, cellSize);

                // Disegna il quadrato
                let colorfill = random(colorPalette)
                stroke(colorfill);
                strokeWeight(2);
                line(lineX, lineY, lineX + lineSize, lineY);
            }
        }
    }
}



function mousePressed() {
    // Rigenera tutte le composizioni
    redraw();
}

function windowResized() {    
    // Ricalcola le dimensioni della griglia
    gridWidth = floor((width - margin * 2) / (cellSize+spacer));
    gridHeight = floor((height - margin * 2) / (cellSize+spacer));
    // Ridisegna l'intera scena
    setup(); // Richiama la funzione setup per ricalcolare le dimensioni e le celle
    redraw(); // Ridisegna la scena 
}