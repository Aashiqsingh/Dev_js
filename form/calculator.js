function calculator(){
    let no1 = parseInt(document.getElementById("num1").value)
    let no2 = parseInt(document.getElementById("num2").value)
    let option = document.getElementById("option").value

    let result = document.getElementById("result")

    switch(option){
        case "+":
            let add = no1 + no2;
            result.innerHTML = "Addition = " + add;
            break;

        case "-":
            let sub = no1 - no2;
            result.innerHTML = "Subtraction = " + sub;
            break;

        case "*":
            let mul = no1 * no2;
            result.innerHTML = "Multiplication = " + mul;
            break;

        case "/":
            let div = no1 / no2;
            result.innerHTML = "Division = " + div;
            break;

        default:
            result.innerHTML = "Invalid option";
    }
}