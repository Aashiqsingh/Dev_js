var num = parseInt(prompt("Enter the number :"))

var rev = 0;

for(;num > 0;)
{
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
}


console.log("Reverse number : " + rev);

