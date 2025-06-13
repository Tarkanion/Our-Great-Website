import './App.css'
import beep from "./assets/beep.mp3"

function App() {
    const playSound = () => {
        const sound = new Audio(beep);
        sound.play();
    }

    return (
    <>
        <div id="content">
            <h2>Hello World</h2>
            <button id="soundButton" onClick={playSound}>Click Me</button>
            <div id="verification-reminder"></div>
        </div>
    </>
    )
}


export default App
