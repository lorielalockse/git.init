console.log()
//selectionner le bouton
const btn = document.querySelector("button")

//rajouter une event listner "click"
btn.addEventListener("click",() => {
    // changer le texte du h2
    document.querySelector("h2").style.color = "red"
    document.querySelector("h2").innerText = msg
})

//affiche la variable "btn" dans la console
console.log(btn)