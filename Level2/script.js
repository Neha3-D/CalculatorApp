// setup and initialization

document.addEventListener("DOMContentLoaded", function(){
    const inputScreen = document.getElementById("input-screen")
    const displayField = document.getElementById("display")
    const buttons = document.querySelectorAll("button")

    // create variables
    let expression = " "
    let shouldClearInput = false

    // function to clear the i/p screen => AC
    function clearInputScreen(){
        expression = " ",
        inputScreen.value = " ",
        displayField.value = " ",
        shouldClearInput = false
    }

    // <=
    function deleteLastCharacter(){
        expression = expression.slice(0,-1)
        // update screen
        inputScreen.value = expression
    }

    // for result=
    function evaluateExpression(){
        try{
            const result = eval(expression).toString() // eval ("2+3").toString
            displayField.value =expression; // 2+3
            inputScreen.value = result; //5
            shouldClearInput = true;
            expression = " "
        }catch(error){
            inputScreen.value = "Error"
        }
    }

    // For operator
    function addOperator(operator){
        if(shouldClearInput){
            clearInputScreen()
        }
        expression = expression + operator
        inputScreen.value = expression
    }

    // add numbers
    function appendToExpression(text){
         if(shouldClearInput){
            clearInputScreen()
        }
        expression = expression + text
        inputScreen.value = expression
    }

    // function for handelling sqrt, +/-, 1/x
    function handleNewOperation(operation){
        if(expression === "") return;

        let result;

        // convert expression to number
        const currentValue = parseFloat(expression). toFixed(2)

        // perform the operation
        switch(operation){
            case "toggleSign":
                result = currentValue * -1;
                break;
            case "sqrt":
                result = Math.sqrt(currentValue)
                expression = `\u221A${currentValue}`
                break;
            case "reciprocal":
                result = 1/currentValue
                expression = `1/${currentValue}`
                break;
            case "percentage":
                result = currentValue/100
                expression = `${currentValue}%`
                break;

        }
        displayField.value = expression
        expression = result.toString();
        inputScreen.value = expression;
        shouldClearInput = "true"
    }

    // add event listener to each button
    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            if(button.classList.contains("clear-icon"))
            {
                clearInputScreen()
            }
            else if(button.classList.contains("delete-icon"))
            {
                deleteLastCharacter()
            }
            else if(button.classList.contains("equal-icon"))
            {
                evaluateExpression()
            }
            else if(button.classList.contains("divide-icon"))
            {
                addOperator("/")
            }
            else if(button.classList.contains("multiply-icon"))
            {
                addOperator("*")
            }
            else if(button.classList.contains("add-icon"))
            {
                addOperator("+")
            }
            else if(button.classList.contains("minus-icon"))
            {
                addOperator("-")
            }
            else if(button.classList.contains("mod-icon"))
            {
                addOperator("%")
            }
            else if(button.classList.contains("power-icon"))
            {
                addOperator("**")
            }
            else if(button.classList.contains("toggle-sign-icon"))
            {
                handleNewOperation("toggleSign")
            }
            else if(button.classList.contains("squareroot-icon"))
            {
                handleNewOperation("sqrt")
            }
            else if(button.classList.contains("reciprocal-icon"))
            {
                handleNewOperation("reciprocal")
            }
            else if(button.classList.contains("percentage-icon"))
            {
                handleNewOperation("percentage")
            }
            else{
                appendToExpression(button.innerText)
            }
        })
    })
})