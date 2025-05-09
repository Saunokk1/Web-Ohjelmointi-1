function avaus() {
    console.log("Keskustelusivu avattu.");
}

avaus()

function send(event) {
    event.preventDefault();
    date = document.getElementById('date').value
    email = document.getElementById('email').value
    type = document.getElementById('type').value
    check = document.getElementById('check').value
    comment = document.getElementById('comment').value
    
    console.log("Birthday:", date)
    console.log("Email:", email)
    console.log("Comment Type:", type)
    console.log("User Agreement:", check)
    console.log("Comment:", comment)
    closeDialog()
}