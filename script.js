function funcaobutton(){
    alert("DONT PRESS ME! PLEASE🐱‍👤");
}

const jsConfetti = new JSConfetti();

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('confettiButton').addEventListener('click', () => jsConfetti.addConfetti({
        emojis: ['🚶', '⛏']
    }));
});