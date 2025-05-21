let currentValue = "O"
victory = ""

function aclick(event) {
    const cell = event.target

    if (cell.innerHTML != "") {
        return
    }

    if (currentValue == "X") {
        currentValue = "O"
        cell.innerHTML = currentValue
    }

    else if (currentValue == "O") {
        currentValue = "X"
        cell.innerHTML = currentValue
    }

    let row = Number(cell.getAttribute("row"))
    let column = Number(cell.getAttribute("col"))

    const pos = { row, column }

    if (row == 1) {

        const positions = [pos, { row: row + 1, column }, { row: row + 2, column }]

        if (checkWin(positions)) {
            styleWinAll(positions)
            victory = currentValue
        }
    }

    if (row == 2) {
        if (currentValue == cellValue(row - 1, column)) {
            if (currentValue == cellValue(row + 1, column)) {
                cell.classList.add('win')
                document.getElementById(`cell-${row + 1}-${column}`).classList.add('win')
                document.getElementById(`cell-${row - 1}-${column}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 3) {
        if (currentValue == cellValue(row - 1, column)) {
            if (currentValue == cellValue(row - 2, column)) {
                cell.classList.add('win')
                document.getElementById(`cell-${row - 1}-${column}`).classList.add('win')
                document.getElementById(`cell-${row - 2}-${column}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (column == 1) {
        if (currentValue == cellValue(row, column + 1)) {
            if (currentValue == cellValue(row, column + 2)) {
                cell.classList.add('win')
                document.getElementById(`cell-${row}-${column + 1}`).classList.add('win')
                document.getElementById(`cell-${row}-${column + 2}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (column == 2) {
        if (currentValue == cellValue(row, column - 1)) {
            if (currentValue == cellValue(row, column + 1)) {
                cell.classList.add('win')
                document.getElementById(`cell-${row}-${column - 1}`).classList.add('win')
                document.getElementById(`cell-${row}-${column - 1}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (column == 3) {
        if (currentValue == cellValue(row, column - 1)) {
            if (currentValue == cellValue(row, column - 2)) {
                cell.classList.add('win')
                document.getElementById(`cell-${row}-${column - 1}`).classList.add('win')
                document.getElementById(`cell-${row}-${column - 2}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 1 && column == 1) {
        if (currentValue == cellValue(row + 1, column + 1)) {
            if (currentValue == cellValue(row + 2, column + 2)) {
                cell.classList.add('win')
                document.getElementById(`cell-${row + 1}-${column + 1}`).classList.add('win')
                document.getElementById(`cell-${row + 2}-${column + 2}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 2 && column == 2) {
        if (currentValue == cellValue(row + 1, column + 1)) {
            if (currentValue == cellValue(row - 1, column - 1)) {
                cell.classList.add('win')
                document.getElementById(`cell-${row + 1}-${column + 1}`).classList.add('win')
                document.getElementById(`cell-${row - 1}-${column - 1}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 3 && column == 3) {
        if (currentValue == cellValue(row - 1, column - 1)) {
            if (currentValue == cellValue(row - 2, column - 2)) {
                cell.classList.add('win')
                document.getElementById(`cell-${row - 1}-${column - 1}`).classList.add('win')
                document.getElementById(`cell-${row - 2}-${column - 2}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 1 && column == 3) {
        if (currentValue == cellValue(row + 1, column - 1)) {
            if (currentValue == cellValue(row + 2, column - 2)) {
                document.getElementById(`cell-${row + 1}-${column - 1}`).classList.add('win')
                document.getElementById(`cell-${row + 2}-${column - 2}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 2 && column == 2) {
        if (currentValue == cellValue(row + 1, column - 1)) {
            if (currentValue == cellValue(row - 1, column + 1)) {
                cell.classList.add('win')
                document.getElementById(`cell-${row + 1}-${column - 1}`).classList.add('win')
                document.getElementById(`cell-${row - 1}-${column + 1}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 3 && column == 1) {
        if (currentValue == cellValue(row - 1, column + 1)) {
            if (currentValue == cellValue(row - 2, column + 2)) {
                cell.classList.add('win')
                document.getElementById(`cell-${row - 1}-${column + 1}`).classList.add('win')
                document.getElementById(`cell-${row - 2}-${column + 2}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    console.log(row)
    console.log(column)
    console.log(victory)
}

function cellValueAt(pos) {
    return cellValue(pos.row, pos.column)
}

const cellValue = (row, column) => {
    return document.getElementById(`cell-${row}-${column}`).innerHTML
}

function styleWinAll(positions) {
    positions.forEach(pos => styleWinAt(pos));
}

function styleWinAt(pos) {
    styleWin(pos.row, pos.column)
}

function styleWin(row, column) {
    document.getElementById(`cell-${row}-${column}`).classList.add('win')
}

function checkWin(positions) {
    const currentValue = cellValueAt(positions[0])
    return currentValue == cellValueAt(positions[1]) && currentValue == cellValueAt(positions[2])
}