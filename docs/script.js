const sound = new Audio("resources/beep.mp3")

function play() {
    sound.play();
}


document.getElementById("beep").addEventListener("click", play)