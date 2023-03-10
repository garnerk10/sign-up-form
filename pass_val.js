const password = document.getElementById("password");
const passwordC = document.getElementById("passwordC");
const submit = document.getElementById("submit");

const validation = () => {
    let pass1 = password.value;
    let pass2 = passwordC.value;

    console.log(pass1);
    console.log(pass2);

    if(pass1 !== pass2){
        alert("Passwords must match");
        throw new Error("Passwords must match!");
    }
};

submit.addEventListener("click", validation);