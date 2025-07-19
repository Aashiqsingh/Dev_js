var newArr = [];

const addStudent = (event) => {
  event.preventDefault();

  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const status = document.getElementById("status").value;

  // Add to array
  const newStudent = { id, name, email, age, status };
  newArr.push(newStudent);

  // Add latest entry to table
  const tbody = document.getElementById("tbody");

  const tr = document.createElement("tr");
  const idTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const emailTd = document.createElement("td");
  const ageTd = document.createElement("td");
  const statusTd = document.createElement("td");

  idTd.innerHTML = newStudent.id;
  nameTd.innerHTML = newStudent.name;
  emailTd.innerHTML = newStudent.email;
  ageTd.innerHTML = newStudent.age;
  statusTd.innerHTML = newStudent.status;

  tr.appendChild(idTd);
  tr.appendChild(nameTd);
  tr.appendChild(emailTd);
  tr.appendChild(ageTd);
  tr.appendChild(statusTd);
  tbody.appendChild(tr);

  // Reset form fields
  // event.target.reset();
};
