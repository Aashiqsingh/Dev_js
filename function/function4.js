function lasvegas(amount,name){
    return name + " your tour confirm lasvegas with package " + amount
    
}

function singapore(amount,name){
    return name + " your tour confirm singapore with package " + amount
    
}
function goa(amount,name){
    return name + " your tour confirm gao with package " + amount
    
}

var budget = 3000;
var name = "dev nagariya"
var flag;

if(budget > 3500)
{
    flag = lasvegas(budget,name)
}else if(budget > 2500)
{
    flag = singapore(budget,name)
}
else if(budget > 1500)
{
    flag = goa(budget,name)
}
else{
    console.log("You have insficient budget you can't go anywhere...");
    
}

console.log(flag);
