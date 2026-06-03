function ValidationForm() {
    let FullName = document.getElementById("name").value;
    let FatherName = document.getElementById("father-name").value;
    let MotherName = document.getElementById("mother-name").value;
    let DOB = document.getElementById("dob").value;
    let Email = document.getElementById("email").value;
    let Gender = document.getElementById("gender").value;
    let Phone = document.getElementById("phone").value;
    let Aadhar = document.getElementById("aadharnumber").value;
    let Qualification = document.getElementById("qualification").value;
    let ExamCenter = document.getElementById("exam-center").value;
    let Password = document.getElementById("password").value;
    let Aadress = document.getElementById("aadress").value;
    let errorMessage = document.getElementById("error-message");

    if (FullName === "" || FatherName === "" || MotherName === "" || DOB === "" || Email === "" || Gender === "" || Phone === "" || Aadhar === "" || Qualification === "" || ExamCenter === "" || Password === "" || Aadress === "") {
        errorMessage.textContent = "Please fill in all fields.";
        return false;
    }   
    if (!Email.includes("@")) {
        errorMessage.textContent = "Please enter a valid email address.";
        return false;
    }

    if(Phone.length !== 10) {
        errorMessage.textContent = "Please enter a valid phone number.";
        return false;
    }

    if(Aadhar.length !== 12) {
        errorMessage.textContent = "Please enter a valid Aadhar number.";
        return false;
    }

    errorMessage.textContent = "";
    return true;
}