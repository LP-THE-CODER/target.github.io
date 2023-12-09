const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something..!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener(
    "click",
    function (e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    },
    false
);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

document.addEventListener("DOMContentLoaded", function () {
    showTask();

    // Create raindrops dynamically
    const rainContainer = document.querySelector(".rain");
    for (let i = 0; i < 50; i++) {
        const drop = document.createElement("div");
        drop.classList.add("drop");
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        rainContainer.appendChild(drop);
    }

    // Create flowers dynamically
    const flowerContainer = document.querySelector(".flower");
    for (let i = 0; i < 20; i++) {
        const petals = document.createElement("div");
        petals.classList.add("petals");
        petals.innerHTML = "🌸";
        petals.style.left = `${Math.random() * 100}vw`;
        petals.style.animationDuration = `${Math.random() * 6 + 4}s`;
        petals.style.animationDelay = `-${Math.random() * 2}s`;
        flowerContainer.appendChild(petals);
    }

    let rainAnimation; // Variable to store rain animation interval

    function stopRain() {
        const rainContainer = document.querySelector(".rain");
        rainContainer.innerHTML = ""; // Clear existing raindrops
        clearInterval(rainAnimation); // Stop the rain animation interval
    }

    document.querySelector(".stop-button").addEventListener("click", stopRain);
});
