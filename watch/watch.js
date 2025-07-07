const getTime = ()=>{

    let data = new Date();

    let hours = document.getElementById("hours");
    let mins = document.getElementById("mins");
    let secs = document.getElementById("secs");

    hours.innerHTML = data.getHours() < 10 ? "0" + data.getHours() : data.getHours();
    mins.innerHTML = data.getMinutes() < 10 ? "0" + data.getMinutes() : data.getMinutes();
    secs.innerHTML = data.getSeconds() < 10 ? "0" + data.getSeconds() : data.getSeconds();


}

setInterval(()=>{
    getTime()
},1000);