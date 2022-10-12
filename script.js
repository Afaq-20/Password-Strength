const password = document.getElementById("password")
const paraEl = document.querySelector(".para")
const strengthEl = document.querySelector(".strength")
const borderEl = document.querySelector(".password")
const blackEl = document.querySelector(".black")



password.addEventListener("input", ()=>{
    if(password.value.length > 0  ){
        paraEl.style.display = "block"
        borderEl.style.borderColor = "red"
    }
    else{
        paraEl.style.display = "none"
    }
    if(password.value.length <= 4){
        paraEl.style.display = "block"
        strengthEl.innerText = "Weak"
        paraEl.style.color = "red"
        blackEl.style.backgroundColor = "red"
    }

    else if(password.value.length > 4 && password.value.length <= 8){
        strengthEl.innerText = "Medium"
        paraEl.style.color = "orange"
        blackEl.style.backgroundColor = "orange"
        borderEl.style.borderColor = "orange"

    }
    else if(password.value.length > 8 && password.value.length <= 12){
        paraEl.style.color = "green"
        blackEl.style.backgroundColor = "green"
        strengthEl.innerText = "Strong"
        borderEl.style.borderColor = "green"



    }
})