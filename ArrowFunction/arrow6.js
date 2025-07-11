const lasvegas = (option)=>{

    return option.fname + " your tour is confirmed in lasvegas with " + option.amount
}

const paris = (option)=>{
    return option.fname + " your tour is confirmed in paris with " + option.amount
}

const dubai = (option)=>{
    return option.fname + " your tour is confirmed in dubai with " + option.amount
}

const travel = (option , cb)=>{
    return cb({fname:option.fname,amount:option.amount})
    
}

const x = parseInt(prompt("Enter your amount :"))
let ans;

if(x > 4000)
{
    ans = travel({fname:"dev nagariya",amount:x},lasvegas)
}
else if(x > 3000)
{
    ans = travel({fname:"dev nagariya",amount:x},paris)
}
else if(x > 2000)
{
    ans = travel({fname:"dev nagariya",amount:x},dubai)
}
else{
    console.log("Sorry dev nagariya you are not eligible for any tour...");
}

console.log(ans);
