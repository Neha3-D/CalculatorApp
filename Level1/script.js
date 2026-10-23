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
            else if(button.classList.contains("percentage-icon"))
            {
                addOperator("%")
            }
            else{
                appendToExpression(button.innerText)
            }
        })
    })
})