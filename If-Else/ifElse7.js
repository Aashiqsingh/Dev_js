var a = parseInt(prompt("Enter first number "))
var b = parseInt(prompt("Enter second number "))
var c = parseInt(prompt("Enter third number "))

if(a > b)
{
    if(a > c)
    {
        console.log(a + " is gretter");
        
    }
    else{
        console.log(c + " is greater");
    }
}
else{
    if(b > c)
    {
        console.log(b  +" is greater");
        
    }
    else{
        console.log(c + " is greater");
    }
}
