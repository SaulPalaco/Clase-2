function calcular() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result;

    switch (operator) {
        case 'sumar':
            result = num1 + num2;
            break;
        case 'restar':
            result = num1 - num2;
            break;
        case 'multiplicar':
            result = num1 * num2;
            break;
        case 'dividir':
            result = num1 / num2;
            break;
        default:
            result = 'Operación no válida';
    }

    document.getElementById('result').value = result;
}
