const inputDisplay = document.getElementById('input');

function isFourArithmeticOperators(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function getLastCharOnDisplay() {
    return inputDisplay.innerText.charAt(inputDisplay.innerText.length - 1);
}

function getLast2CharOnDisplay() {
    return inputDisplay.innerText.charAt(inputDisplay.innerText.length - 2);
}

function replaceDisplay(value) {
    inputDisplay.innerText = value
}

function add(value) {
    if (isFourArithmeticOperators(value)) {
        addArithmeticOperator(value)
        return
    }

    addNumber(value)
}

function addNumber(number){
    const lastChar = getLastCharOnDisplay();
    const last2Char = getLast2CharOnDisplay();

    if (inputDisplay.innerText ==='0') {
        replaceDisplay(number)
        return
    }
    
    //最後尾が0で前の文字が四則演算子のとき最後尾の0を置き換える
     if(lastChar === '0' && isFourArithmeticOperators(last2Char)){
        replaceDisplay(inputDisplay.innerText.slice(0, -1) + number)
        return
    } 

    replaceDisplay(inputDisplay.innerText + number)
}

function addArithmeticOperator(arithmeticOperator){
    const lastChar = getLastCharOnDisplay();

    if (isFourArithmeticOperators(lastChar)) {
        const replacedExpression = inputDisplay.innerText.slice(0, -1) + arithmeticOperator
        replaceDisplay(replacedExpression)
        return
    }
    
    replaceDisplay(inputDisplay.innerText + arithmeticOperator)
}

function clearDisplay() {
    replaceDisplay('0')
}

function calculate() {
    let result = inputDisplay.innerText
    try {
        result = eval(inputDisplay.innerText);
    } catch (e) {
        result = 'Error!'
    }

    replaceDisplay(result)
}