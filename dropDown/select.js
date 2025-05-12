const changeColor = ()=>{
    let box = document.getElementById("box")

    let colors = document.getElementById("colors")
    console.log(colors.value);


    box.style.height = "300px"
    box.style.width = "300px"
    box.style.backgroundColor = colors.value
    box.style.margin = "100px 400px"

    
}

function changeRadius(){
    let box = document.getElementById("box")

    let radius = document.getElementById("radius")

    box.style.borderRadius = radius.value
}