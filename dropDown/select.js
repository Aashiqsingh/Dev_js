const changeColor = ()=>{
    let box = document.getElementById("box")

    let colors = document.getElementById("colors")
    console.log(colors.value);


    box.style.height = "200px"
    box.style.width = "200px"
    box.style.backgroundColor = colors.value
    box.style.margin = "100px 400px"

    
}