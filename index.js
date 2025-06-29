let guest = document.getElementById("guestScore")

let home = document.getElementById("homeScore")

let homeNumber = 0

let guestNumber = 0

// homeScore //

function homeScoreOne() {
    homeNumber += 1
    home.textContent = homeNumber
}

function homeScoreTwo() {
    homeNumber += 2
    home.textContent = homeNumber
}

function homeScoreThree() {
    homeNumber += 3
    home.textContent = homeNumber
}

//guest score //

function guestScoreOne() {
    guestNumber += 1
    guest.textContent = guestNumber
}

function guestScoreTwo() {
    guestNumber += 2
    guest.textContent = guestNumber
}

function guestScoreThree() {
    guestNumber += 3
    guest.textContent = guestNumber
}

// reset button

function resetHomeBtn() {
    homeNumber = 0
    home.textContent = 0
}

function resetGuestBtn() {
    guestNumber = 0
    guest.textContent = 0
}