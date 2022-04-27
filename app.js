const operator = document.querySelectorAll(".operator")
const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll(".buttons span")
const buttonsArray = Array.from(buttons)


buttonsArray.map(button => button.addEventListener("click",
    function sumScreenData() {
        if (button.textContent === "C") {
            screen.textContent = ''
        } else if (screen.textContent === "ERROR") {
            return;
        } else if (button.textContent === "÷") {
            screen.textContent += '/'
        } else if (button.textContent === "x") {
            screen.textContent += '*'
        } else if (button.textContent !== "=") {
            screen.textContent += button.textContent
        } else if (button.textContent === "=") {
            const totalCheck = eval(screen.textContent)
            const alphaCheck = /[a-zA-Z]/.test(totalCheck)
            if (alphaCheck) {
                screen.textContent = "ERROR"
            } else {
                screen.textContent = totalCheck
            }
        }
    }))