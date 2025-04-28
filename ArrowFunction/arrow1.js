const add = (a,b)=>{
    console.log("Addition = ",a+b);
    
}

const sub = (a,b)=>{
    console.log("Subtract = ",a-b);
    
}

const mul = (a,b)=>{
    console.log("Multiply = ",a*b);
    
}

const div = (a,b)=>{
    console.log("Divide = ",a/b);
    
}

const x = parseInt(prompt("Enter first number :"))
const y = parseInt(prompt("Enter second number :"))
const choice = parseInt(prompt("1 for Add \n2 for Sub \n3 for mul \n4 for div \n\nEnter your choice :"))

switch(choice){
    case 1: add(x,y)
            break;

    case 2: sub(x,y)
            break;

    case 3: mul(x,y)
            break;

    case 4: div(x,y)
            break;

    default:
            console.log("Pls select valid option...");
            break;
            
}