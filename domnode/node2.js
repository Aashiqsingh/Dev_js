var students = [
    {
        id:1,
        name:"Dev",
        age:18,
        status:"Active",
        email:"dev@gmail.com"
    },
    {
        id:2,
        name:"meet",
        age:19,
        status:"Active",
        email:"meet@gmail.com"
    },
    {
        id:3,
        name:"ajay",
        age:20,
        status:"Active",
        email:"ajay@gmail.com"
    },
    {
        id:4,
        name:"rahul",
        age:21,
        status:"Active",
        email:"rahul@gmail.com"
    },
    {
        id:5,
        name:"samir",
        age:22,
        status:"Active",
        email:"samir@gmail.com"
    }
]

const addStudent = ()=>{
    
    let tbody = document.getElementById("tbody");

    students.forEach((stu)=>{
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let statusTd = document.createElement("td");
        let emailTd = document.createElement("td");

        idTd.innerText = stu.id;
        nameTd.innerText = stu.name;
        ageTd.innerText = stu.age;
        statusTd.innerText = stu.status;
        emailTd.innerText = stu.email;

        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(ageTd);
        tr.appendChild(statusTd);
        tr.appendChild(emailTd);
        tbody.appendChild(tr);
    })
}