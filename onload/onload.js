var body = document.getElementById("body")

function red(){
    body.style.backgroundColor = "red";


    setTimeout(()=>{
        green();
    },1000)
}

function green(){
    body.style.backgroundColor = "green";
    setTimeout(()=>{
        blue();
    },1000)
}

function blue(){
    body.style.backgroundColor = "blue";
    setTimeout(()=>{
        yellow();
    },1000)
}

function yellow(){
    body.style.backgroundColor = "yellow";
    setTimeout(()=>{
        red();
    },1000)
}