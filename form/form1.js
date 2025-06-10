function submitHandler(event){
    event.preventDefault();

    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value

    let nameError = document.getElementById("nameError")
    let ageError = document.getElementById("ageError")
    let emailError = document.getElementById("emailError")

    // alert("Form submitted..")

    if(name === ""){
        nameError.innerText = "Name is required"
        nameError.style.color = "red"
    }
    else if(name.length < 4){
        nameError.innerText = "Name should be atleast 4 characters"
        nameError.style.color = "red"
    }
    else{
        nameError.innerText = name 
        nameError.style.color = "green"
    }

    if(age === ""){
        ageError.innerText = "Age is required"
        ageError.style.color = "red"
    }
    else if(age < 18){
        ageError.innerText = "Age should be atleast 18 years"
        ageError.style.color = "red"
    }
    else{
        ageError.innerText = age 
        ageError.style.color = "green"
    
    }

    if(email === ""){
        emailError.innerText = "Email is required"
        emailError.style.color = "red"
    }
    else if(!email.includes("@")){
        emailError.innerText = "Email should be not valid"
        emailError.style.color = "red"
    }
    else{
        emailError.innerText = email
        emailError.style.color = "green"
    }

    // console.log("Name ----> ",name);
    // console.log("Age ----> ",age);
    // console.log("Email ----> ",email);
    
}