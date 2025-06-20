const otpGenrator = ()=>{

    let otp = Math.floor(1000 + Math.random() * 9000);
    console.log(otp);


    let result = document.getElementById("result");
    result.innerHTML = otp;
}