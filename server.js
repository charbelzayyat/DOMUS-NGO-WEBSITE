require("dotenv").config();
const fs = require("fs");
const path = require("path");

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const mongoose = require("mongoose");

const Donation = require("./models/Donation");

const app = express();

/* ========================
   UPLOADS FOLDER
======================== */
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

/* ========================
   DB CONNECTION
======================== */
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ MongoDB Error:", err));

/* ========================
   MIDDLEWARE
======================== */
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

/* ========================
   MULTER CONFIG
======================== */
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/png" ||
        file.mimetype === "application/pdf"
    ) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type"), false);
    }
};

const upload = multer({ storage, fileFilter });

/* ========================
   DONATION ROUTE
======================== */
app.post("/api/donate", upload.single("receipt"), async (req, res) => {
    try {

        if (!req.body.name || !req.body.email || !req.body.donationType) {
            return res.status(400).json({
                success: false,
                message: "Missing required fields"
            });
        }

        const newDonation = new Donation({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
            donationType: req.body.donationType,
            paymentMethod: req.body.paymentMethod || "physical",
            amount: req.body.amount || "0",
            receipt: req.file ? req.file.filename : ""
        });

        await newDonation.save();

        res.json({
            success: true,
            message: "Thank you for donating ❤️"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
});

/* ========================
   TEST ROUTE
======================== */
app.get("/", (req, res) => {
    res.send("DOMUS NGO Backend Running");
});

/* ========================
   START SERVER
======================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});