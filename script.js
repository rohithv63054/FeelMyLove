const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainPage = document.getElementById("mainPage");
const lovePage = document.getElementById("lovePage");
const backBtn = document.getElementById("backbtn");
const music = document.getElementById("bgMusic");

music.volume = 0.4;

yesBtn.addEventListener("click", () => {
    mainPage.style.display = "none";
    lovePage.style.display = "block";
    music.play();
});

backBtn.addEventListener("click", () => {
    lovePage.style.display = "none";
    mainPage.style.display = "block";
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 400 - 200;
    const y = Math.random() * 400 - 200;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
