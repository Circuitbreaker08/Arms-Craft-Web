const c = document.getElementById("c")
const ctx = c.getContext("2d")

c.height = window.innerHeight
c.width = window.innerWidth

ctx.fillStyle = "#ff0000"
ctx.fillRect(0, 0, c.width, c.height)

const socket = io("https://74.83.58.123:2700")