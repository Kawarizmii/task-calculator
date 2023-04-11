let currentNumber = ''
let prevNumber = 0
let calculationOperator;
let hasilpersen

const clearAll = () =>{
    prevNumber = 0
    calculationOperator = ''
    currentNumber = ''
    hasilpersen = 0
    updateScreen("",true)
}

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number,reset) => {
    if(reset) calculatorScreen.value=''
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number)=>{
    number.addEventListener("click", (event)=> {
        inputNumber(event.target.id)
    })
})

const inputNumber = (number) => {
    if(currentNumber === 0){
        currentNumber = number
    }else {
        currentNumber += number
    }
    console.log(currentNumber);
    updateScreen(currentNumber)
}

const inputOperator = (operator) => {
    //console.log(currentNumber,operator, !!calculationOperator, prevNumber);
    if(!calculationOperator&&operator){
        prevNumber = currentNumber
    }
    currentNumber = ''
    calculationOperator = operator
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator?.addEventListener("click", (event) =>{
        //console.log(event.target.id);
        inputOperator(event.target.id)
    })
})

const pesentage = document.querySelector('.percentage')

pesentage.addEventListener('click', (e) => {
    if(currentNumber.includes('%'))return
    updateScreen(currentNumber+'%')
    if(prevNumber&&(calculationOperator==='+'||calculationOperator==='-')){
        hasilpersen = prevNumber*Number(currentNumber)/100
    }else{
        hasilpersen = Number(currentNumber)/100
    }
    currentNumber = hasilpersen
    //console.log(hasilpersen);
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

const calculate = () => {
    let result = ''
    //console.log(currentNumber, prevNumber, calculationOperator);
    switch(calculationOperator){
        case "+":
            result = Number(prevNumber) + Number(currentNumber)
            break;
        case "-":
            result = Number(prevNumber) - Number(currentNumber)
            break;
        case "*":
            result = Number(prevNumber) * Number(currentNumber)
            break;
        case "/":
            result = Number(prevNumber) / Number(currentNumber)
            break;
        default:
            break;
    }
    currentNumber = result
    console.log(result);
    calculationOperator = ''
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    if(!currentNumber)return
    inputDecimal('.')
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
    updateScreen(currentNumber)
}