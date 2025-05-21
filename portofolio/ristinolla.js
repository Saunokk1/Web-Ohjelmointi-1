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

    if (row == 1) {
        if (currentValue == document.getElementById(`cell-${row + 1}-${column}`).innerHTML) {
            if (currentValue == document.getElementById(`cell-${row + 2}-${column}`).innerHTML) {
                cell.classList.add('win')
                document.getElementById(`cell-${row + 1}-${column}`).classList.add('win')
                document.getElementById(`cell-${row + 2}-${column}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 2) {
        if (currentValue == document.getElementById(`cell-${row - 1}-${column}`).innerHTML) {
            if (currentValue == document.getElementById(`cell-${row + 1}-${column}`).innerHTML) {
                cell.classList.add('win')
                document.getElementById(`cell-${row + 1}-${column}`).classList.add('win')
                document.getElementById(`cell-${row - 1}-${column}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 3) {
        if (currentValue == document.getElementById(`cell-${row - 1}-${column}`).innerHTML) {
            if (currentValue == document.getElementById(`cell-${row - 2}-${column}`).innerHTML) {
                cell.classList.add('win')
                document.getElementById(`cell-${row - 1}-${column}`).classList.add('win')
                document.getElementById(`cell-${row - 2}-${column}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (column == 1) {
        if (currentValue == document.getElementById(`cell-${row}-${column + 1}`).innerHTML) {
            if (currentValue == document.getElementById(`cell-${row}-${column + 2}`).innerHTML) {
                cell.classList.add('win')
                document.getElementById(`cell-${row}-${column + 1}`).classList.add('win')
                document.getElementById(`cell-${row}-${column + 2}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (column == 2) {
        if (currentValue == document.getElementById(`cell-${row}-${column - 1}`).innerHTML) {
            if (currentValue == document.getElementById(`cell-${row}-${column + 1}`).innerHTML) {
                cell.classList.add('win')
                document.getElementById(`cell-${row}-${column - 1}`).classList.add('win')
                document.getElementById(`cell-${row}-${column - 1}`).classList.add('win')
                victory = currentValue
            }
        }
    } 

    if (column == 3) {
        if (currentValue == document.getElementById(`cell-${row}-${column - 1}`).innerHTML) {
            if (currentValue == document.getElementById(`cell-${row}-${column - 2}`).innerHTML) {
                cell.classList.add('win')
                document.getElementById(`cell-${row}-${column - 1}`).classList.add('win')
                document.getElementById(`cell-${row}-${column - 2}`).classList.add('win')
                victory = currentValue
            }
        }
    }
    
    if (row == 1 && column == 1) {
        if (currentValue == document.getElementById(`cell-${row + 1}-${column + 1}`).innerHTML) {
            if (currentValue == document.getElementById(`cell-${row + 2}-${column + 2}`).innerHTML) {
                cell.classList.add('win')
                document.getElementById(`cell-${row + 1}-${column + 1}`).classList.add('win')
                document.getElementById(`cell-${row + 2}-${column + 2}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 2 && column == 2) {
        if (currentValue == document.getElementById(`cell-${row + 1}-${column + 1}`).innerHTML) {
            if (currentValue == document.getElementById(`cell-${row - 1}-${column - 1}`).innerHTML) {
                cell.classList.add('win')
                document.getElementById(`cell-${row + 1}-${column + 1}`).classList.add('win')
                document.getElementById(`cell-${row - 1}-${column - 1}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 3 && column == 3) {
        if (currentValue == document.getElementById(`cell-${row - 1}-${column - 1}`).innerHTML) {
            if (currentValue == document.getElementById(`cell-${row - 2}-${column - 2}`).innerHTML) {
                cell.classList.add('win')
                document.getElementById(`cell-${row - 1}-${column - 1}`).classList.add('win')
                document.getElementById(`cell-${row - 2}-${column - 2}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 1 && column == 3) {
        if (currentValue == document.getElementById(`cell-${row + 1}-${column - 1}`).innerHTML) {
            if (currentValue == document.getElementById(`cell-${row + 2}-${column - 2}`).innerHTML) {
                document.getElementById(`cell-${row + 1}-${column - 1}`).classList.add('win')
                document.getElementById(`cell-${row + 2}-${column - 2}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 2 && column == 2) {
        if (currentValue == document.getElementById(`cell-${row + 1}-${column - 1}`).innerHTML) {
            if (currentValue == document.getElementById(`cell-${row - 1}-${column + 1}`).innerHTML) {
                cell.classList.add('win')
                document.getElementById(`cell-${row + 1}-${column - 1}`).classList.add('win')
                document.getElementById(`cell-${row - 1}-${column + 1}`).classList.add('win')
                victory = currentValue
            }
        }
    }

    if (row == 3 && column == 1) {
        if (currentValue == document.getElementById(`cell-${row - 1}-${column + 1}`).innerHTML) {
            if (currentValue == document.getElementById(`cell-${row - 2}-${column + 2}`).innerHTML) {
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