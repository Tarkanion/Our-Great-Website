const sound = new Audio("resources/beep.mp3");
const soundButton = document.getElementById("soundButton");
const verificationReminder = document.getElementById("verification-reminder");

// EFFECTS: plays sound if sound button is verified
function play() {
    if (isVerified()) {
        sound.play();
    }
}

// EFFECTS: returns true if sound button is verified, otherwise 
// creates please verify popup if non-existent
function isVerified() {
    if (soundButton.classList.contains("verified")) {
        return true;
    } else if (!verificationReminder.classList.contains("active")) {
        const verifyNow = document.createElement("p");
        verifyNow.textContent = "Verify NOW";
        verifyNow.style.color = "red";
        verificationReminder.appendChild(verifyNow);
        verificationReminder.classList.add("active");
    }
}

soundButton.addEventListener("click", play);