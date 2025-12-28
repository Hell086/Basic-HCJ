import { add as funcAdd, sub as funcSub, mul as funcMul, div as funcDiv } from './calculator.js'//import top ma huna parxa

$(document).ready(function () {

    // Operator buttons
    $('#btn_add').click(function () {
        $('#symbol').val('+')
    })

    $('#btn_sub').click(function () {
        $('#symbol').val('-')
    })

    $('#btn_mul').click(function () {
        $('#symbol').val('*')
    })

    $('#btn_div').click(function () {
        $('#symbol').val('/')
    })

    // Show result
    $('#btn_res').click(function () {

        const x = Number($('#num1').val())
        const y = Number($('#num2').val())
        const operator = $('#symbol').val()

        if ($('#num1').val() === '') {
            alert("Please enter first number")
            return
        }

        if ($('#num2').val() === '') {
            alert("Please enter second number")
            return
        }

        if (!operator) {
            alert("Please select an operation")
            return
        }

        let result

        switch (operator) {
            case '+':
                result = funcAdd(x, y)
                break
            case '-':
                result = funcSub(x, y)
                break
            case '*':
                result = funcMul(x, y)
                break
            case '/':
                result = funcDiv(x, y)
                break
            default:
                alert("Invalid operation")
                return
        }

        $('#result').val(result)
    })
})
