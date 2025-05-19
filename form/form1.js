function submitHandler(event){
    event.preventDefault();

    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value

    alert("Form submitted..")

    console.log("Name ----> ",name);
    console.log("Age ----> ",age);
    console.log("Email ----> ",email);
    
}