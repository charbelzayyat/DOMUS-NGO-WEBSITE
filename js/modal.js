const DOMUS_CONTACT = {
    phone: "+96170970707",
    paypalEmail: "info@domuslb.com"
};
const API_URL =
    window.location.hostname === "localhost"
        ? "http://localhost:5000"
        : "https://domus-ngo-website.onrender.com";
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
        
        this.receiptSection =
            document.getElementById("receiptSection");

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

document.querySelectorAll(
    'input[name="paymentMethod"]'
).forEach(radio => {

    radio.addEventListener("change", () => {

        if (
            radio.value === "omt" ||
            radio.value === "whish"
        ) {

            this.receiptSection.style.display =
                "block";
        }

        else {

            this.receiptSection.style.display =
                "none";
        }
    });

});
}

    showOptions() {

    const value =
        this.donationType.value;

    if (value === "money") {

        this.moneyOptions.style.display =
            "block";

        this.amountSection.style.display =
            "block";

        this.receiptSection.style.display =
            "none";

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

        this.receiptSection.style.display =
            "none";

        this.uploadSection.style.display =
            "block";
    }

    else {

        this.moneyOptions.style.display =
            "none";

        this.amountSection.style.display =
            "none";

        this.receiptSection.style.display =
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

            const paymentMethod =
                document.querySelector(
                    'input[name="paymentMethod"]:checked'
                )?.value;

            const amount =
                document.querySelector(
                    "#amountSection input"
                )?.value;

            if (!paymentMethod) {
                alert("Please select a payment method");
                return;
            }

            // Receipt required for OMT and Whish
            if (
                (paymentMethod === "omt" ||
                 paymentMethod === "whish")
                &&
                !document.getElementById("receipt").files.length
            ) {

                alert(
                    "Please upload your transfer receipt."
                );

                return;
            }

            const formData = new FormData();

            formData.append(
                "name",
                document.getElementById("donorName").value
            );

            formData.append(
                "email",
                document.getElementById("donorEmail").value
            );

            formData.append(
                "message",
                document.getElementById("message").value
            );

            formData.append(
                "donationType",
                document.getElementById("donationType").value
            );

            formData.append(
                "paymentMethod",
                paymentMethod
            );

            formData.append(
                "amount",
                amount
            );

            const receiptFile =
                document.getElementById("receipt").files[0];

            if (receiptFile) {

                formData.append(
                    "receipt",
                    receiptFile
                );
            }

            fetch(`${API_URL}/api/donate`, {
    method: "POST",
    body: formData
})
.then(async (res) => {
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message);
    }

    alert(data.message); // ONLY backend success message
    this.donateForm.reset();
})
.catch((error) => {
    console.error("FETCH ERROR:", error);
    alert("Donation failed. Please try again.");
});

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