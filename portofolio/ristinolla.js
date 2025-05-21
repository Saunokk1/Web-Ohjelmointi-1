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

        const pos2 = { row: row + 1, column }
        const pos3 = { row: row + 2, column }
        
        if (currentValue == cellValueAt(pos2) && currentValue == cellValueAt(pos3)) {
            styleWinAt(pos)
            styleWinAt(pos2)
            styleWinAt(pos3)
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

function cellValue(row, column) {
    return document.getElementById(`cell-${row}-${column}`).innerHTML
}

function styleWinAt(pos) {
    styleWin(pos.row, pos.column)
}
function styleWin(row, column) {
    document.getElementById(`cell-${row}-${column}`).classList.add('win')
}