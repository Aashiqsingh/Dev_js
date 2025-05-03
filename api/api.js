const getData = async()=>{
    const res = await fetch("https://node5.onrender.com/user/user")
    const data = await res.json()

    console.log(data.data);


    let tbody = document.getElementById("tbody")


    for(let i=0;i<data.data.length;i++){
        let tr = document.createElement("tr")
        let tdId = document.createElement("td")
        let tdName = document.createElement("td")
        let tdEmail = document.createElement("td")
        let tdAge = document.createElement("td")
        let tdStatus = document.createElement("td")
        let tdAction = document.createElement("td")
        let tdButton = document.createElement("button")

        tdId.innerHTML = data.data[i]._id
        tdName.innerHTML = data.data[i].name
        tdEmail.innerHTML = data.data[i].email
        tdAge.innerHTML = data.data[i].age
        tdStatus.innerHTML = data.data[i].isActive
        tdButton.innerHTML = "Delete"
        tdButton.addEventListener("click",async()=>{
            // alert(data.data[i]._id + " is deleted")
            const res = await fetch("https://node5.onrender.com/user/user/"+data.data[i]._id,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            })
            // const deleteRes = await res.json()
            // console.log(deleteRes);
            console.log(res);
            if(res.status == 204){
                // alert("Delete successfully...")
                tr.remove()
            }
            
        })

        tr.append(tdId,tdName,tdEmail,tdAge,tdStatus.tdAction,tdButton)
        tbody.append(tr)
    }
    
}