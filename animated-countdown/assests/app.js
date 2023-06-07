const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");
const backgroundImage = document.querySelector(".background-image");

runAnimation();

function resetDom() {
    counter.classList.remove("hide");
    finalMessage.classList.remove("show");
    backgroundImage.classList.remove("show");

    nums.forEach((num) => {
        num.classList.value = ""
    })

    nums[0].classList.add("in");
}

function runAnimation() {

    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1

        num.addEventListener("animationend", (e) => {
            if (e.animationName === "goIn" && idx !== nextToLast) {
                num.classList.remove("in");
                num.classList.add("out");
            } else if (e.animationName === "goOut" && num.nextElementSibling) {
                num.nextElementSibling.classList.add("in");
            } else {
                counter.classList.add("hide");
                finalMessage.classList.add("show");
                backgroundImage.classList.add("show");
            }
        })
    })
}

replay.addEventListener("click", () => {
    resetDom();
    runAnimation();
});
