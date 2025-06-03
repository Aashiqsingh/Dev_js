var colors = ["red","green","blue","orange","yellow","darkblue","gray","aqua","purple"]

function changeColor(){
    let randomIndex = Math.floor(Math.random() * colors.length)
    console.log(randomIndex);

    let mydiv = document.getElementById("mydiv")

    mydiv.style.backgroundColor = colors[randomIndex]
    
}