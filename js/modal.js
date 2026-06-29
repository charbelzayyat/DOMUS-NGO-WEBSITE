/*const DOMUS_CONTACT = {
    phone: "+96170970707",
    paypalEmail: "info@domuslb.com"
};

const API_URL = window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://domus-ngo-website.onrender.com";

class DonationModal {

    constructor() {

        // Donation
        this.donationType = document.getElementById("donationType");
        this.moneyOptions = document.getElementById("moneyOptions");
        this.uploadSection = document.getElementById("uploadSection");
        this.amountSection = document.getElementById("amountSection");
        this.receiptSection = document.getElementById("receiptSection");
        this.donateForm = document.getElementById("donateForm");

        // Volunteer
        this.volunteerForm = null;

        if (this.donationType) this.addDonationEvents();
        if (this.donateForm) this.addDonateSubmitEvent();

        this.initVolunteerWhenReady();
    }

    /* ================= DONATION ================= */

    /*addDonationEvents() {
        this.donationType.addEventListener("change", () => this.showOptions());

        document.addEventListener("change", (e) => {
            if (e.target.name === "paymentMethod") {
                this.updateReceiptSection(e.target.value);
            }
        });
    }

    showOptions() {
        const value = this.donationType.value;

        if (this.receiptSection) {
            this.receiptSection.style.display = "none";
            this.receiptSection.innerHTML = "";
        }

        if (value === "money") {
            this.moneyOptions.style.display = "block";
            this.amountSection.style.display = "block";
            this.uploadSection.style.display = "none";
        } else if (["food", "clothes", "gifts"].includes(value)) {
            this.moneyOptions.style.display = "none";
            this.amountSection.style.display = "none";
            this.uploadSection.style.display = "block";
        } else {
            this.moneyOptions.style.display = "none";
            this.amountSection.style.display = "none";
            this.uploadSection.style.display = "none";
        }
    }

    updateReceiptSection(method) {
        if (!this.receiptSection) return;

        this.receiptSection.style.display = "block";

        this.receiptSection.innerHTML = `
            <div class="alert alert-info">
                Payment method: ${method}
            </div>
        `;
    }

    addDonateSubmitEvent() {
        this.donateForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(this.donateForm);

            const res = await fetch(`${API_URL}/api/donate`, {
                method: "POST",
                body: formData
            });

            const data = await res.json();

            if (data.success) {
                alert("Thank you for donating ❤️");
                this.donateForm.reset();
                this.showOptions();
            } else {
                alert(data.message);
            }
        });
    }

    /* ================= VOLUNTEER ================= */

    /*initVolunteerWhenReady() {
        const check = setInterval(() => {
            const form = document.getElementById("volunteerForm");

            if (form) {
                clearInterval(check);
                this.volunteerForm = form;
                this.addVolunteerSubmitEvent();
            }
        }, 300);
    }

    addVolunteerSubmitEvent() {
    this.volunteerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // FRONTEND ONLY RESPONSE
        alert("Thank you for joining DOMUS ❤️ We will contact you soon.");

        this.volunteerForm.reset();

        const modalEl = document.getElementById("volunteerModal");
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.hide();
    });
}
}

document.addEventListener("DOMContentLoaded", () => {
    new DonationModal();
});
*/
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
        this.donationType = document.getElementById("donationType");
        this.moneyOptions = document.getElementById("moneyOptions");
        this.uploadSection = document.getElementById("uploadSection");
        this.amountSection = document.getElementById("amountSection");
        this.receiptSection = document.getElementById("receiptSection");
        this.donateForm = document.getElementById("donateForm");
        this.volunteerForm = document.getElementById("volunteerForm");

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
        this.donationType.addEventListener("change", () => this.showOptions());

        document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
            radio.addEventListener("change", () => {
                this.receiptSection.style.display = "block";
                
                if (radio.value === "omt" || radio.value === "whish") {
                    const provider = radio.value.toUpperCase();
                    this.receiptSection.innerHTML = `
                        <div class="alert alert-warning mt-2 mb-3" style="font-size: 0.9rem; border-left: 4px solid #ffc107;">
                            <strong>${provider} Mobile Transfer Instructions:</strong><br>
                            Please send your intended donation amount to our line: 
                            <strong class="text-dark bg-light px-1 rounded">${DOMUS_CONTACT.phone}</strong> (Name: DOMUS NGO).<br>
                            Once completed, please drop your transfer receipt screenshot below.
                        </div>
                        <label class="form-label fw-bold small text-muted">Upload Transfer Receipt</label>
                        <input type="file" id="receipt" name="receipt" class="form-control" accept="image/*,.pdf" required>
                        <small class="text-muted">Upload your ${provider} transfer receipt copy.</small>
                    `;
                } 
                else if (radio.value === "paypal") {
                    this.receiptSection.innerHTML = `
                        <div class="alert alert-info mt-2 mb-3" style="font-size: 0.9rem; border-left: 4px solid #0dcaf0;">
                            <strong>PayPal Direct Transfer Info:</strong><br>
                            Your donation will route straight to our account: 
                            <strong class="text-dark bg-light px-1 rounded">${DOMUS_CONTACT.paypalEmail}</strong>.
                        </div>
                        <div class="mb-2">
                            <label class="form-label fw-bold small text-muted">PayPal Account Email</label>
                            <input type="email" class="form-control" placeholder="your-email@example.com" required>
                        </div>
                    `;
                } 
                else if (radio.value === "card") {
                    this.receiptSection.innerHTML = `
                        <div class="alert alert-secondary mt-2 mb-3" style="font-size: 0.85rem; background-color: #f8f9fa;">
                            <i class="fas fa-lock text-success me-1"></i> Secure 256-Bit SSL Mock Gateway Processing.
                        </div>
                        <div class="row g-2">
                            <div class="col-12 mb-1">
                                <label class="form-label fw-bold small text-muted mb-1">Cardholder Name</label>
                                <input type="text" class="form-control" placeholder="John Doe" required>
                            </div>
                            <div class="col-12 mb-1">
                                <label class="form-label fw-bold small text-muted mb-1">Card Number</label>
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-credit-card"></i></span>
                                    <input type="text" class="form-control" placeholder="4111 2222 3333 4444" maxlength="19" required>
                                </div>
                            </div>
                            <div class="col-6">
                                <label class="form-label fw-bold small text-muted mb-1">Expiration Date</label>
                                <input type="text" class="form-control" placeholder="MM/YY" maxlength="5" required>
                            </div>
                            <div class="col-6">
                                <label class="form-label fw-bold small text-muted mb-1">CVV</label>
                                <input type="password" class="form-control" placeholder="123" maxlength="3" required>
                            </div>
                        </div>
                    `;
                } 
                else {
                    this.receiptSection.style.display = "none";
                    this.receiptSection.innerHTML = "";
                }
            });
        });
    }

    showOptions() {
        const value = this.donationType.value;

        // Clear any prior selections inside the dynamic receipt view container
        this.receiptSection.innerHTML = "";

        if (value === "money") {
            this.moneyOptions.style.display = "block";
            this.amountSection.style.display = "block";
            this.receiptSection.style.display = "none";
            this.uploadSection.style.display = "none";
            
            // Clear checked radio options state to keep form fluid
            document.querySelectorAll('input[name="paymentMethod"]').forEach(r => r.checked = false);
        } 
        else if (value === "food" || value === "clothes" || value === "gifts") {
            this.moneyOptions.style.display = "none";
            this.amountSection.style.display = "none";
            this.receiptSection.style.display = "none";
            this.uploadSection.style.display = "block";
        } 
        else {
            this.moneyOptions.style.display = "none";
            this.amountSection.style.display = "none";
            this.receiptSection.style.display = "none";
            this.uploadSection.style.display = "none";
        }
    }

    addDonateSubmitEvent() {
        this.donateForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const donationType = document.getElementById("donationType").value;
            let paymentMethod = null;
            let amount = null;

            if (donationType === "money") {
                paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value;
                amount = document.querySelector("#amountSection input")?.value;

                if (!paymentMethod) {
                    alert("Please select a payment method");
                    return;
                }

                // Receipt validation check ONLY if user explicitly chose OMT or Whish
                if (paymentMethod === "omt" || paymentMethod === "whish") {
                    const receiptInput = document.getElementById("receipt");
                    if (!receiptInput || !receiptInput.files.length) {
                        alert("Please upload your transfer receipt.");
                        return;
                    }
                }
            }

            const formData = new FormData();
            formData.append("name", document.getElementById("donorName").value);
            formData.append("email", document.getElementById("donorEmail").value);
            formData.append("message", document.getElementById("message").value);
            formData.append("donationType", donationType);

            if (donationType === "money") {
                formData.append("paymentMethod", paymentMethod);
                formData.append("amount", amount);

                const receiptInput = document.getElementById("receipt");
                if (receiptInput && receiptInput.files[0]) {
                    formData.append("receipt", receiptInput.files[0]);
                }
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
                alert(data.message); 
                this.donateForm.reset();
                this.receiptSection.style.display = "none";
                this.receiptSection.innerHTML = "";
            })
            .catch((error) => {
                console.error("FETCH ERROR:", error);
                alert("Donation failed. Please try again.");
            });
        });
    }

    addVolunteerSubmitEvent() {
        this.volunteerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Thank you for joining the DOMUS family!");
            this.volunteerForm.reset();
        });
    }
}

new DonationModal();