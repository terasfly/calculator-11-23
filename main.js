const screen = document.getElementById('screen')
const buttonClean = document.querySelector('.button--clean')
let a = '';
let b = '';
let operator = ''
let finish = false

let skaiciai = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

let action = ['+', '-', '*', '/']


buttonClean.addEventListener('click', clearAll)

function clearAll() {

    a = ''
    b = ''
    operator = ''
    screen.textContent = '0'
}








document.addEventListener('click', (e) => {

        const key = e.target.textContent
        if (e.target.classList.contains('button')) {


            if (skaiciai.includes(key)) {
                if (b === '' && operator === '') {
                    a += key
                    console.log(a)
                    screen.textContent = a
                } else if (a !== '' && b !== '' && finish) {

                    b = key
                    console.log(b)
                    finish = false
                    screen.textContent = b

                } else {
                    b += key
                    screen.textContent = b
                    console.log(b)
                }
                console.log(a, b, operator)
                return

            }
            if (action.includes(key)) {
                operator = key
                console.log(a, b, operator)
                screen.textContent = operator
                return
            }


        }


        if (key === '=') {

            let numA = Number(a)
            let numB = Number(b)


            let pakartotinisLygu = numB

            console.log(pakartotinisLygu)
            switch (operator) {

                case '+':
                    a = numA + numB
                    console.log(a)
                    break;
                case '-':
                    a = numA - numB
                    console.log(a)
                    break;
                case '*':
                    a = numA * numB
                    break;
                case '/':
                    a = numA / numB
                    break;

                default:
                    break;
            }
            finish = true
            screen.textContent = a
            b = pakartotinisLygu
            console.log(b)

        }



    }



)


/**
 * 
 */