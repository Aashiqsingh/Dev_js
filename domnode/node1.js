var newArr = [];

const addStudent = (event) => {
  event.preventDefault();

  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const status = document.getElementById("status").value;

  // Create a student object
  const newStudent = { id, name, email, age, status };
  newArr.push(newStudent);

  // Get table body
  const tbody = document.getElementById("tbody");

  // Create new row and cells
  const tr = document.createElement("tr");
  const idTd = document.createElement("td");
  const nameTd = document.createElement("td");
  const emailTd = document.createElement("td");
  const ageTd = document.createElement("td");
  const statusTd = document.createElement("td");
  const deleteTd = document.createElement("td");
  const btn = document.createElement("button");

  idTd.innerHTML = newStudent.id;
  nameTd.innerHTML = newStudent.name;
  emailTd.innerHTML = newStudent.email;
  ageTd.innerHTML = newStudent.age;
  statusTd.innerHTML = newStudent.status;
  btn.innerHTML = "Delete";

  // Optional: style the delete button
  btn.className = "btn btn-secondary";

  // Add delete functionality
  btn.onclick = function () {
    // Remove row from DOM
    tbody.removeChild(tr);

    // Remove from array
 // for debugging
  };

  // Append cells to row
  tr.appendChild(idTd);
  tr.appendChild(nameTd);
  tr.appendChild(emailTd);
  tr.appendChild(ageTd);
  tr.appendChild(statusTd);
  deleteTd.appendChild(btn);
  tr.appendChild(deleteTd);

  // Append row to table
  tbody.appendChild(tr);

  // Reset the form
  event.target.reset();
};
