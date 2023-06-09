const text = document.querySelector("#text");
const speed = document.querySelector("#speed");
const flowText = "We Love Programming!";
let idx = 1;
let changeSpeed = 300 ;

writeText();

function writeText() {
    text.innerHTML = flowText.slice(0, idx);

    idx++;

    if (idx > flowText.length) {
        idx = 1;
    }

    setTimeout(writeText, changeSpeed);
}

speed.addEventListener("input", (e) => changeSpeed = 300 / e.target.value);

