const container = document.querySelectorAll(".container")

for (let i = 0; i < container.length; i++) {
    container[i].addEventListener("click", () => {
        container[i].classList.toggle("on")
    })
}

// let container = document.querySelector(".container")
// container.addEventListener("click", () => {
//     console.log("done")
//     container.style.backgroundColor = "red";
// })