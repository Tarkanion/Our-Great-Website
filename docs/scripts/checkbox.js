const checkboxButton = document.getElementById("captcha-checkbox");

// EFFECTS: sets checkboxButton and soundButton to be active
// and also removes verification reminder if active
function verify() {
    checkboxButton.classList.add("verified");
    soundButton.classList.add("verified");

    if (verificationReminder.classList.contains("active")) {
        verificationReminder.innerHTML = "";
    }
}

checkboxButton.addEventListener("click", verify);