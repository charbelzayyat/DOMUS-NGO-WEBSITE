const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({

    name: String,
    email: String,
    message: String,
    donationType: String,
    paymentMethod: String,
    amount: String,
    receipt: String,

    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "Donation",
    donationSchema
);