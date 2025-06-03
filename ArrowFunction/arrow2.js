const science = (per,name)=>{
    console.log(name + " your admision is confirmed in science stream with " + per);
    
}

const commerce = (per,name)=>{
    console.log(name + " your admision is confirmed in commerce stream with " + per);
}

const arts = (per,name)=>{
    console.log(name + " your admision is confirmed in arts stream with " + per);
}


const x = parseInt(prompt("Enter your percentage :"))
const fname = prompt("Enter your name :")

if(x > 90){
    science(x,fname)
}
else if(x > 70){
    commerce(x,fname)
}
else if(x > 50){
    arts(x,fname)
}
else{
    console.log("Sorry " + fname + " you are not eligible for any stream...");
}