var buttons = document.getElementsByClassName('button');
var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == '+' || value == '-' || value == '/' || value == '*' || value == '%';
}

function factorial(num) {
    if (num == 0 || num == 1) {
        return num;
    }
    return num * factorial(num - 1);
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();
        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        }
        else if (value == 'ac') {
            display.textContent = "";
        }
        else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        }
        else if (value == '/') {
            operator = '/';
            operand1 = parseFloat(display.textContent);
        }
        else if (value == '+') {
            operator = '+';
            operand1 = parseFloat(display.textContent);
        }
        else if (value == '-') {
            operator = '-';
            operand1 = parseFloat(display.textContent);
        }
        else if (value == '*') {
            operator = '*';
            operand1 = parseFloat(display.textContent);
        }
        else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1
        }
        else if (value == 'x!') {
            operand1 = parseFloat(text);
            display.textContent = factorial(operand1);
        }
        else if (value == "√") {
            operand1 = parseFloat(text);
            display.textContent = Math.sqrt(operand1)
        }
        else if (value == "sin") {
            operand1 = parseFloat(text);
            display.textContent = Math.sin(operand1);
        }
        else if (value == "cos") {
            operand1 = parseFloat(text);
            display.textContent = Math.cos(operand1);
        }
        else if (value == "tan") {
            operand1 = parseFloat(text);
            display.textContent = Math.tan(operand1);
        }
        else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
        else {
            display.textContent += value;
        }
    });
}