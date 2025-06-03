var eng = parseInt(prompt("Enter the english marks.."))
var math = parseInt(prompt("Enter the math marks.."))
var sci = parseInt(prompt("Enter the science marks.."))


var add = eng + math + sci;

console.log("Total marks of all subjects :",add);

var per = Math.floor(add/3);
console.log("percentage = ",per);

if(per > 90){
    console.log("Grade : A");
}
else if(per > 80){
    console.log("Grade : B");
}
else if(per > 70){
    console.log("Grade : C");
}
else if(per > 60){
    console.log("Grade : D");
}
else if(per > 50){
    console.log("Grade : E");
}
else{
    console.log("fail....");
    
}

