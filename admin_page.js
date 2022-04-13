window.localStorage.setItem('sav_prevodovky', 0);
window.localStorage.setItem('sav_pneu', 0);
window.localStorage.setItem('sav_volanty', 0);

function showTrain() {
    document.getElementById("train1").src = "train" + (Math.round(Math.random() * 2 + 1)) + ".gif";
    document.getElementById("train1").style.height = "200px";
}