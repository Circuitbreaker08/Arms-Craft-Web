const c = document.getElementById("c")
const ctx = c.getContext("2d")

c.height = window.innerHeight
c.width = window.innerWidth

ctx.fillStyle = "#ff0000"
ctx.fillRect(0, 0, c.width, c.height)

document.addEventListener("keydown", (event) => {
    if (event.key == "w") {console.log("w")}
    if (event.key == "a") {console.log("a")}
    if (event.key == "s") {console.log("s")}
    if (event.key == "d") {console.log("d")}
 })

const socket = io("https://74.83.58.123:2700")