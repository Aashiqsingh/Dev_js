var a = parseInt(prompt("Enter first number"))
var b = parseInt(prompt("Enter second number"))

var choice = parseInt(prompt("1 for Addition \n2 for Subtraction \n3 for Multipliction \n4 for Division \n\n\n Enter your choice"))

switch(choice){
    case 1:
        let add = a + b;
        console.log("Addition = ",add);
        break;

    case 2:
        let sub = a - b;
        console.log("Subtraction = ", sub);
        break;

    case 3:
        let mul = a * b;
        console.log("Multiplication = ", mul);
        break;

    case 4:
        let div = a / b;
        console.log("Divide = ",div);
        break;

    default:
        console.log("Invalid choice");
        break;
        
        
}