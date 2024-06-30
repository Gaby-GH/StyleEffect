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
let etoile0 = document.querySelector("#etoile0")
etoile0.style.top = "10px"
etoile0.style.right = "0px"
let etoile1 = document.querySelector("#etoile1")
etoile1.style.top = "-600px"
etoile1.style.right = "-700px"
let etoile_top = undefined
let etoile_right = undefined
let list_etoile = [etoile0, etoile1]
function MoveEtoile(etoile){
    etoile_top = etoile.style.top
    etoile_top = etoile_top.replace("px", "")
    etoile_right = etoile.style.right
    etoile_right = etoile_right.replace("px", "")
    if (etoile_top < 1400){
        etoile_top -= -2
        etoile_right -= -4
    }else{
        etoile_top = 10
        etoile_right = 10
    }

    etoile.style.top = `${etoile_top}px`
    etoile.style.right = `${etoile_right}px`
}
l.addEventListener("click", () => {
    document.body.style.background = `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6))`
    for (let t in list_etoile){
        list_etoile[t].removeAttribute("hidden")
    }
    setInterval(() => {
        for (let j in list_etoile){
            MoveEtoile(list_etoile[j])
        }
    }, "5")
})


let t2 = document.querySelector("#t2")
t2.addEventListener("click", () => {
    document.body.style.background = "linear-gradient(rgb(51, 97, 194), rgb(255, 226, 181))"
})
