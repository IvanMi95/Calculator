window.onload = () => {
  const display = document.getElementById('display')
  const plus = document.getElementById('plus')
  const minus = document.getElementById('minus')
  const multiply = document.getElementById('multiply')
  const divide = document.getElementById('divide')
  const equal = document.getElementById('equal')
  const one = document.getElementById('one')
  const two = document.getElementById('two')
  const three = document.getElementById('three')
  const four = document.getElementById('four')
  const five = document.getElementById('five')
  const six = document.getElementById('six')
  const seven = document.getElementById('seven')
  const eight = document.getElementById('eight')
  const nine = document.getElementById('nine')
  const zero = document.getElementById('zero')
  const dot = document.getElementById('dot')
  const clear = document.getElementById('clear')

  let numberArray = []
  let result = 0
  let numberOne = 0
  let numberTwo=null
  let operator=''

  const putNumberInArray = (num) => {
    numberArray.push(num)
    numberOne = makeNumber(numberArray)
    display.innerText = numberOne
    console.log(numberOne);
  }

  const putOperator = (sign) => {
    numberOne = parseFloat(numberOne)
    operator = sign
    display.innerText = operator
    numberArray = []
    if (operator === '+' && numberTwo!=null) {
      result = numberTwo + numberOne
      display.innerText = result
      numberTwo = result
    } else if (operator === '-' && numberTwo!=null) {
      result = numberTwo - numberOne
      display.innerText = result
      numberTwo = result
    } else if (operator === '*' && numberTwo!=null) {
      result = numberTwo * numberOne
      display.innerText = result
      numberTwo = result
    } else if (operator === '/' && numberTwo!=null) {
      result = numberTwo / numberOne
      display.innerText = result
      numberTwo = result
    } else {
      numberTwo = numberOne
    }
    numberOne = 0
  }

  const calculate = () => {
    numberArray = []
    numberOne = parseFloat(numberOne)
    if (operator === '+' && numberTwo!=null) {
      result = numberTwo + numberOne
      numberTwo = result
    } else if (operator === '-' && numberTwo!=null) {
      result = numberTwo - numberOne
      numberTwo = result
    } else if (operator === '*' && numberTwo!=null) {
      result = numberTwo * numberOne
      numberTwo = result
    } else if (operator === '/' && numberTwo!=null) {
      result = numberTwo / numberOne
      numberTwo = result
    }
    display.innerText = result
  }

  const clearAll=()=>{
    numberArray = []
    result = 0
    numberOne = 0
    numberTwo=null
    operator=''
    display.innerText=result
  }

  plus.addEventListener("click", () => putOperator('+'))
  minus.addEventListener("click", () => putOperator('-'))
  multiply.addEventListener("click", () => putOperator('*'))
  divide.addEventListener("click", () => putOperator('/'))
  equal.addEventListener("click", () => calculate())
  clear.addEventListener("click",() => clearAll())
  one.addEventListener("click", () => putNumberInArray("1"))
  two.addEventListener("click", () => putNumberInArray("2"))
  three.addEventListener("click", () => putNumberInArray("3"))
  four.addEventListener("click", () => putNumberInArray("4"))
  five.addEventListener("click", () => putNumberInArray("5"))
  six.addEventListener("click", () => putNumberInArray("6"))
  seven.addEventListener("click", () => putNumberInArray("7"))
  eight.addEventListener("click", () => putNumberInArray("8"))
  nine.addEventListener("click", () => putNumberInArray("9"))
  zero.addEventListener("click", () => putNumberInArray("0"))
  dot.addEventListener("click", () => putNumberInArray("."))

  function makeNumber(numberArray) {
    finalNumber = (numberArray.toString()).replaceAll(',', '');
    return finalNumber
  }
}
