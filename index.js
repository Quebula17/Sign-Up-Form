let cityDropdown = document.getElementById('city')

fetch('india.json')
    .then(response => response.json())
    .then(data => {

        data.forEach(city => {
            let option = document.createElement("option");
            option.value = city.city.toLowerCase();
            option.text = city.city;
            cityDropdown.appendChild(option);
        })
    })
    .catch(error => {
        console.log(error);
    })


function validEmail(email){
    let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(email);
}

function validMobile(number){
    let regexMobile = /^[6-9]\d{9}$/;
    return regexMobile.test(number);
}

document.getElementById('sign-up-form').addEventListener('submit', (event) => {
    let emailInput = document.getElementById('email').value;
    let emailError = document.getElementById('email-error');

    if(!validEmail(emailInput)){
        console.log(emailInput)
        console.log(validEmail(emailInput))
        emailError.innerHTML = "Please enter a valid email address"
        event.preventDefault();
    }
    else{
        emailError.innerHTML = "";
        console.log("email is ok")
    }
})

document.getElementById('sign-up-form').addEventListener('submit', (event) => {
    let mobileInput = document.getElementById('mobile-number').value;
    let mobileError = document.getElementById('mobile-error');

    if(!validMobile(mobileInput)){
        mobileError.innerHTML = "Please enter a valid mobile number"
        event.preventDefault();
    }
    else{
        mobileError.innerHTML = "";
        console.log("mobile is ok")
    }
})

document.getElementById('sign-up-form').addEventListener('submit', (event) => {

    let passwordInput = document.getElementById('password').value;
    let confirmPasswordInput = document.getElementById('confirm-password').value;
    let passwordError = document.getElementById('pwd-error');

    if(passwordInput !== confirmPasswordInput){
        passwordError.innerHTML = "Passwords must match";
        event.preventDefault();
    }

    else{
        passwordError.innerHTML = ""
    }


})




