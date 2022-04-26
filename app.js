const operator = document.querySelectorAll(".operator")
const screen = document.querySelector("#screen")
const buttons = document.querySelectorAll(".buttons span")
const buttonsArray = Array.from(buttons)
document.querySelectorAll('.operator')[1].innerText = '/';
document.querySelectorAll('.operator')[2].innerText = '*';


buttonsArray.map(button => button.addEventListener("click",
    function sumScreenData() {
        if (button.textContent === "C") {
            screen.textContent = ''
        } else if (screen.textContent === "ERROR") {
            end
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