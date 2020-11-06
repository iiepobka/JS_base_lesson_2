'use strict';

// task 1
function write(id, text) {
    document.getElementById(id).innerHTML = text;
}

write('answer_1_1', 'Для выражения c = ++a; alert(c); // 2:<br> оператор ++ перед а сразу увеличивает переременную a на 1, затем возвращает её значение  и присваивается в переменную c - 2.');

write('answer_1_2', 'Для выражения d = b++; alert(d); // 1:<br> сначала возвращается значение переменной b и присваивается d - 1, а уже затем оператор ++ увеличивает b на 1 - 2.')

write('answer_1_3', 'Для выражения c = (2 + ++a); alert(c); // 5:<br>  оператор ++ перед a сразу увеличивает переременную a на 1 - 3, затем значение в (a + 2) присваивается с 5.');

write('answer_1_4', 'Для выражения d = (2 + b++); alert(d); // 4:<br> сначала возвращается значение переменной b - 2, затем значение в (b + 2) присваивается d, затем оператор ++ после b увеличивает b на 1 - 3.')

write('answer_1_5', 'Для выражений alert(a); // 3 alert(b); // 3:<br> вывод значений переменных (значения приведены в предыдущих пунктах)ю')

//task 2
write('answer_2', 'x = 5: *= умножает а на 2 - 4, затем 4 + 1 записывается в х.');

// task 3
function actionsWithNumbers(number1, number2) {
    if (number1 >= 0 && number2 > 0) {
        return a - b;
    }
    else if (number1 < 0 && number2 < 0) {
        return a * b;
    }
    else {
        return a + b;
    }
}

let a = parseInt(5);
let b = parseInt(2);
let result = actionsWithNumbers(a, b);
write('answer_3_1', 'При a = 5, b = 2: a - b = ' + result + ';');

a = parseInt(-5);
b = parseInt(-2);
result = actionsWithNumbers(a, b);
write('answer_3_2', 'При a = -5, b = -2: a * b = ' + result + ';');

a = parseInt(5);
b = parseInt(-2);
result = actionsWithNumbers(a, b);
write('answer_3_3', 'При a = 5, b = -2: a + b = ' + result + ';');

//task 4
a = Math.floor(Math.random() * 16);
result = String(a);
write('answer_4_1', 'При a = ' + result + ' вывод чисел от a до 15:');

switch (a) {
    case 0:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);
    case 1:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);
    case 2:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);
    case 3:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);
    case 4:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);

    case 5:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);

    case 6:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);

    case 7:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);

    case 8:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);

    case 9:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);
    case 10:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);
    case 11:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);
    case 12:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);
    case 13:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);

    case 14:
        write('answer_4_2', result);
        a++;
        result += ', ' + String(a);

    case 15:
        write('answer_4_2', result);
        result += ', ' + String(a);
}

//task 5
function baseMathAdd(number1, number2) {
    let add = number1 + number2;
    return 'результат сложение первого числа со вторым: ' + String(add) + ';'
}

function baseMathSub(number1, number2) {
    let sub = number1 - number2;
    return 'результат вычетания первого числа из второго: ' + String(sub) + ';'
}
function baseMathMult(number1, number2) {
    let mult = number1 * number2;
    let div = Math.round(number1 / number2, 2);
    return 'результат умножения первого числа на второе: ' + String(mult) + ';'
}

function baseMathDiv(number1, number2) {
    let div = Math.round(number1 / number2, 2);
    return 'результат деления первого числа на второе: ' + String(div) + '.'
}

let newA = 3;
let newB = 4;
write('answer_5_0', 'Перове число ' + newA + '. Второе число ' + newB + '.')
write('answer_5_1', baseMathAdd(3, 4));
write('answer_5_2', baseMathSub(3, 4));
write('answer_5_3', baseMathMult(3, 4));
write('answer_5_4', baseMathDiv(3, 4));

//task 6
function mathOperation(number1, number2, operation) {
    switch (operation) {
        case '+':
            return String(baseMathAdd(number1, number2)) + '.';
        case '-':
            return String(baseMathSub(number1, number2)) + '.';
        case '*':
            return String(baseMathMult(number1, number2)) + '.';
        case '/':
            return String(Math.round(baseMathDiv(number1, number2))) + '.';

    }
}

let mathOperationNamber1 = 3;
let mathOperationNamber2 = 4;
let operation = '*';

write('answer_6_1', 'Если первое число равно: ' + mathOperationNamber1 + ', второе равно: ' + mathOperationNamber2 + ', а действие над числами: ' + operation + ' то:');
write('answer_6_2', mathOperation(3, 4, operation));

// task 7
let operand1 = null;
let operand2 = 0;
result = operand1 > operand2;
write('answer_7', 'При сравнении null и 0 результат будет: ' + result + ', т.к. null - это отсутствие всякого значения, a 0 - число. Результат сравнениz всегда будет false.');

//task 8
function power(val, pow) {
    let powerResult = val;
    if (pow > 1) {
        powerResult *= power(val, pow - 1);
    }
    return powerResult;
}

let powerNumber1 = 5;
let powerNumber2 = 6;
write('answer_8', 'Если основние равно ' + powerNumber1 + ', a показатель степени равен ' + powerNumber2 + ', то число в этой степени равно ' + power(powerNumber1, powerNumber2) + '.');



