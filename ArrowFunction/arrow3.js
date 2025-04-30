//  prime number 


const isPrime = (num)=>{

    for(let i=2;i<num;i++)
    {
        if(num%i==0)
        {
            return false;
        }
    }
    return true;
}

var ans = isPrime(20)
console.log(ans == true ? "Prime" : "Not prime"); // true