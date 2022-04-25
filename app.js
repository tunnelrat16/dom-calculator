const operator = document.querySelectorAll(".operator")
const screen = document.querySelector("#screen")
const button1 = document.querySelector(".buttons span:nth-child(12)")
const button2 = document.querySelector(".buttons span:nth-child(13)")
const button3 = document.querySelector(".buttons span:nth-child(14)")
const button4 = document.querySelector(".buttons span:nth-child(8)")
const button5 = document.querySelector(".buttons span:nth-child(9)")
const button6 = document.querySelector(".buttons span:nth-child(10)")
const button7 = document.querySelector(".buttons span:nth-child(4)")
const button8 = document.querySelector(".buttons span:nth-child(5)")
const button9 = document.querySelector(".buttons span:nth-child(6)")
const equalsButton = document.querySelector("#equals")
const clearButton = document.querySelector("#clear")
const zeroButton = document.querySelector("#zero")
const operatorDivide = document.querySelector(".buttons span:nth-child(2)")
const operatorMinus = document.querySelector(".buttons span:nth-child(11)")
const operatorPlus = document.querySelector(".buttons span:nth-child(7)")
const operatorMult = document.querySelector(".buttons span:nth-child(3)")

//finalAnswer()

equalsButton.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent = eval(screen.textContent)
})

operatorDivide.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += "/"
})

operatorMinus.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += operatorMinus.textContent
})

operatorPlus.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += operatorPlus.textContent
})

operatorMult.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += "*"
})


clearButton.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent = ''
})

zeroButton.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += zeroButton.textContent
})

button1.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += button1.textContent
})

button2.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += button2.textContent
})

button3.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += button3.textContent
})

button4.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += button4.textContent
})

button5.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += button5.textContent
})

button6.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += button6.textContent
})

button7.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += button7.textContent
})

button8.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += button8.textContent
})

button9.addEventListener("click", event => {
    event.preventDefault();
    screen.textContent += button9.textContent
})