const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51I4GzjCSzA8Pexg4k5rp7MYQUDiMMGKXilCn2q7s0wyZajW09wfnlTy0ZaFpdC3tfvs68ttdxtpxhpgs9Jn19Q7700vroZBwhM"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Hello world"));
app.post("/payments/create", async (req, res) => {
	const total = req.query.total;
	console.log("Payment request received!", total);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "usd",
	});
	res.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

exports.api = functions.https.onRequest(app);
//http://localhost:5001/challenge-99739/us-central1/api
//https://console.firebase.google.com/project/challenge-99739/overview
