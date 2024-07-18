const gridBtn = document.querySelector("#gridBtn");
let gridNumber;



gridBtn.addEventListener("click", () => {
    gridNumber = parseInt(document.querySelector("#gridNumberInput").value);
    if (validateGridValue(gridNumber)) {
        initializeGrid(gridNumber);
        const closeModalBtn = document.querySelector("#closeModal");
        closeModalBtn.click();
    } else alert("Choose number between 2 and 100");

});

const initializeGrid = function (number) {
    reinitializeGrid();
    if (number != 0) {
        const grid = document.querySelector("#grid");

        for (let i = 0; i < number; i++) {
            const newDivLine = document.createElement('div');
            newDivLine.id = 'gridLine';
            newDivLine.className = 'gridLine' + i;
            newDivLine.style.cssText = "display: flex;";
            grid.appendChild(newDivLine);
            for (let j = 0; j < number; j++) {
                const newDivColumn = document.createElement('div');
                newDivColumn.id = 'gridLine' + i + "Column" + j;
                newDivColumn.className = 'gridLine' + i + "Column" + j;
                newDivColumn.style.cssText =
                    "height : " + 500 / number + "px;"
                    + "width : " + 500 / number + "px;"
                    + "border: 1px solid black;"
                    + "cursor : pointer";
                newDivColumn.addEventListener('mouseover', function () {
                    newDivColumn.style.backgroundColor = getRandomRgb(); // Changez la couleur de fond ou ajoutez d'autres styles
                });
                newDivLine.appendChild(newDivColumn);
            }

        }
    }
};

const reinitializeGrid = function () {
    const gridLines = document.querySelectorAll("#gridLine");

    if (gridLines) {
        gridLines.forEach(gridLine => {
            gridLine.remove();
        });
    }
};



const getRandomRgb = function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")";

};

const validateGridValue = function (number) {
    console.log(number);
    return (number < 2 || number > 100) ? false : true;
};