const DOMUS_CONTACT = {
    phone: "+96170970707",
    paypalEmail: "info@domuslb.com"
};
class DonationModal {

    constructor() {

        this.donationType =
            document.getElementById("donationType");

        this.moneyOptions =
            document.getElementById("moneyOptions");

        this.uploadSection =
            document.getElementById("uploadSection");
        
        this.amountSection =
            document.getElementById("amountSection");

        this.donateForm =
            document.getElementById("donateForm");

        this.volunteerForm =
            document.getElementById("volunteerForm");

        if (this.donationType) {

            this.addDonationEvents();
        }

        if (this.donateForm) {

            this.addDonateSubmitEvent();
        }

        if (this.volunteerForm) {

            this.addVolunteerSubmitEvent();
        }
    }

    addDonationEvents() {

        this.donationType.addEventListener(
            "change",
            () => this.showOptions()
        );
    }

    showOptions() {

    const value =
        this.donationType.value;

    if (value === "money") {

        this.moneyOptions.style.display =
            "block";

        this.amountSection.style.display =
            "block";

        this.uploadSection.style.display =
            "none";
    }

    else if (
        value === "food" ||
        value === "clothes" ||
        value === "gifts"
    ) {

        this.moneyOptions.style.display =
            "none";

        this.amountSection.style.display =
            "none";

        this.uploadSection.style.display =
            "block";
    }

    else {

        this.moneyOptions.style.display =
            "none";

        this.amountSection.style.display =
            "none";

        this.uploadSection.style.display =
            "none";
    }
}

    addDonateSubmitEvent() {

    this.donateForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();
            console.log("Submit clicked");

            const paymentMethod =
                document.querySelector('input[name="paymentMethod"]:checked')?.value;

            console.log(paymentMethod);

            const amount =
                document.querySelector("#amountSection input")?.value;
            console.log(amount);

            if (!paymentMethod) {
                alert("Please select a payment method");
                return;
            }

            let message = "";

            switch (paymentMethod) {

                case "omt":
                    message =
                        `Please send ${amount || "your donation"} via OMT to ${DOMUS_CONTACT.phone}`;
                    break;

                case "whish":
                    message =
                        `Please send ${amount || "your donation"} via Whish to ${DOMUS_CONTACT.phone}`;
                    break;

                case "paypal":
                    message =
                        `Please send ${amount || "your donation"} via PayPal to ${DOMUS_CONTACT.paypalEmail}`;
                    break;

                case "card":
                    message =
                        `Card payment will be processed securely (demo mode).`;
                    break;
            }

            alert(message);

            this.donateForm.reset();

            this.moneyOptions.style.display = "none";
            this.amountSection.style.display = "none";
            this.uploadSection.style.display = "none";
        }
    );
}

    addVolunteerSubmitEvent() {

        this.volunteerForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                alert(
                    "Thank you for joining the DOMUS family!"
                );

                this.volunteerForm.reset();
            }
        );
    }
}

new DonationModal();