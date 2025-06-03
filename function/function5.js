function science(per,name){
    return name + " your admisiion confirm in science with per " + per 
}

function commerce(per,name){
    return name + " your admisiion confirm in commerce with per " + per 
}

function arts(per,name){
    return name + " your admisiion confirm in arts with per " + per 
}


let per = parseInt(prompt("Enter your percentage "))
let name = "dev nagariya";
let ans;


if(per > 90)
{
    ans = science(per,name)
}
else if(per > 70){
    ans = commerce(per,name)
}
else if(per > 50){
    ans = arts(per,name)
}
else{
    console.log("You need to study hard.. for eligliblity to get college..");
    
}

console.log(ans);
