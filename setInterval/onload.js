var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white"];

function getRandomColor(){
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    console.log(randomColorIndex);

    let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = colors[randomColorIndex];
    
}

function start(){

    setInterval(()=>{
        getRandomColor();
    },1000);
}