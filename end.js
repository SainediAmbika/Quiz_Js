const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.stringify(JSON.parse(localStorage.getItem("highScores")));


finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {

    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("Clicked the save Button");
    e.preventDefault();
    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    console.log(highScores);
};

