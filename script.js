let S = document.querySelector("#S")
S.addEventListener("click", () => {
    document.body.style.background = "linear-gradient(0.5turn, #3f87a6, #ebf8e1, #f69d3c)"
})

let t1 = document.querySelector("#t1")
t1.addEventListener("click", () => {
    document.body.style.background = `linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%), 
    linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), 
    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)`
})

let y = document.querySelector("#y")
y.addEventListener("click", () => {
    document.body.style.background = `linear-gradient(to right, rgb(255, 0, 0) 20%, orange 20% 40%, yellow 40% 60%, green 60% 80%, blue 80%)`
})

let l = document.querySelector("#l")
l.addEventListener("click", () => {
    document.body.style.background = ""
})


let t2 = document.querySelector("#t2")
t2.addEventListener("click", () => {
    document.body.style.background = "linear-gradient(rgb(51, 97, 194), rgb(255, 226, 181))"
})
