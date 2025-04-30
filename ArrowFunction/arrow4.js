const lasvegas = (option)=>{

    console.log(option.fname + " your tour is confirmed in lasvegas with " + option.amount);
}

const paris = (option)=>{
    console.log(option.fname + " your tour is confirmed in paris with " + option.amount);
}

const dubai = (option)=>{
    console.log(option.fname + " your tour is confirmed in dubai with " + option.amount);
}

const travel = (option , cb)=>{
    cb({fname:option.fname,amount:option.amount})
}

const x = parseInt(prompt("Enter your amount :"))

if(x > 4000)
{
    travel({fname:"dev nagariya",amount:x},lasvegas)
}
else if(x > 3000)
{
    travel({fname:"dev nagariya",amount:x},paris)
}
else if(x > 2000)
{
    travel({fname:"dev nagariya",amount:x},dubai)
}
else{
    console.log("Sorry dev nagariya you are not eligible for any tour...");
}