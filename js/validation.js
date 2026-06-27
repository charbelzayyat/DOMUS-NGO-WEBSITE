/*
CUSTOM UI REQUIREMENT:
This contact form implements real-time validation.
Validation is performed while the user types
using JavaScript ES6 class methods and input events.
Errors are displayed immediately without waiting
for form submission.
*/
class ContactValidation {

    constructor() {

        this.name = document.getElementById("name");
        this.email = document.getElementById("email");
        this.phone = document.getElementById("phone");
        this.message = document.getElementById("message");

        this.form = document.getElementById("contactForm");

        if(this.form){

            this.addEvents();
        }
    }

    addEvents(){

        this.name.addEventListener(
            "input",
            () => this.validateName()
        );

        this.email.addEventListener(
            "input",
            () => this.validateEmail()
        );

        this.phone.addEventListener(
            "input",
            () => this.validatePhone()
        );

        this.message.addEventListener(
            "input",
            () => this.validateMessage()
        );

        this.form.addEventListener(
            "submit",
            (event) => this.submitForm(event)
        );
    }

    validateName(){

        const error =
            document.getElementById("nameError");

        if(this.name.value.trim().length < 3){

            error.innerText =
                "Name must contain at least 3 characters.";

            return false;
        }

        error.innerText = "";
        return true;
    }

    validateEmail(){

        const error =
            document.getElementById("emailError");

        const pattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!pattern.test(this.email.value)){

            error.innerText =
                "Please enter a valid email.";

            return false;
        }

        error.innerText = "";
        return true;
    }

    validatePhone(){

        const error =
        document.getElementById("phoneError");

    // Only numbers are accepted (8 to 15 digits)
    const pattern = /^[0-9]{8,15}$/;

    if(!pattern.test(this.phone.value)){

        error.innerText =
            "Enter a valid phone number.";

        return false;
    }

    error.innerText = "";

    return true;
    }

    validateMessage(){

        const error =
            document.getElementById("messageError");

        if(this.message.value.trim().length < 10){

            error.innerText =
                "Message must contain at least 10 characters.";

            return false;
        }

        error.innerText = "";
        return true;
    }

    submitForm(event){

        event.preventDefault();

        if(
            this.validateName() &&
            this.validateEmail() &&
            this.validatePhone() &&
            this.validateMessage()
        ){

            alert(
                "Thank you! Your message has been sent."
            );

            this.form.reset();
        }
    }

}

new ContactValidation();