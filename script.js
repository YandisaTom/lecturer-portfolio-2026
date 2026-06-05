const avatar = document.getElementById("avatar");
const speech = document.getElementById("speech");

// TALK WHEN CLICKED
avatar.addEventListener("click", () => {
    speech.style.display = "block";

    setTimeout(() => {
        speech.style.display = "none";
    }, 3000);
});


// FOLLOW MOUSE
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 40;
    const y = (window.innerHeight / 2 - e.pageY) / 40;

    avatar.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});