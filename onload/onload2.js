const submit = ()=>{
    const num = document.getElementById("num")


    let main = document.getElementById("main")

    main.style.display = "flex";
    main.style.justifyContent = "center";
    main.style.alignItems = "center";
    main.style.flexWrap = "wrap";
    main.style.gap = "10px";

    for(let i=1;i<=num.value;i++){
        let box = document.createElement("div")
        box.style.width = " 200px";
        box.style.height = " 200px";
        box.style.border = "2px solid black";
        box.style.backgroundColor = "#f1f1f1";

        box.innerHTML = "<h1>Box "+ i + "</h1>";


        main.appendChild(box)
    }




}