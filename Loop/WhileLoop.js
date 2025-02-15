// let i=0;
// while(i < 5)
// {
//     console.log(i);
//     i++;   
// }


// fabonacci series -- 0 1 1 2 3 5 8 13

let a = 0;
let b = 1;

console.log(a);
console.log(b);

let i = 1;
while(i < 10)
{
    let c = a+b;
    console.log(c);
    a=b;
    b=c;
    
    i++;
}

