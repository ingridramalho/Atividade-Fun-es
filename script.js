function Multiplicar () {
    const numero1 = Number(document.querySelector("#numero1").value)
    const numero2 = Number(document.querySelector("#numero2").value)
    const numero3 = Number(document.querySelector("#numero3").value)
    
    const resultado = document.querySelector(".resultado")
    resultado.innerHTML = `Resultado: ${numero1*numero2*numero3}`
}

const button = document.querySelector("button")
button.addEventListener("click", Multiplicar)
