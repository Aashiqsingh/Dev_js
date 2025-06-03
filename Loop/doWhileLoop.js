// let i = 1;

// do{
//     console.log(i);
//     i++;
// }while(i<=5);


let i = 2;
var num = 21;
var flag = 0;

do{
    if(num%i==0)
    {
        flag = 1;
    }
    i++;
    
}while(i<num);

if(flag == 0)
{
    console.log(num + " is a prime number");
}
else{
    console.log(num + " is not a prime number");
}
