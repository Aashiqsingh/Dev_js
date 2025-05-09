var images = ["img1.png","img2.webp","img3.jpg","img4.jpg","img5.jpg"]

function changeImg(){

    let randomIndex = Math.floor(Math.random() * images.length)
    console.log(randomIndex);
    
    let img = document.getElementById("img")

    img.src = "../Image/"+images[randomIndex]

}