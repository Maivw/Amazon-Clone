import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

function Payment() {
	const history = useHistory();
	const [{ basket, user }, dispatch] = useStateValue();
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [clientSecret, setClientSecret] = useState(true);
	const stripe = useStripe();
	const elements = useElements();

	useEffect(() => {
		//generate special client stripe secrete
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [basket]);
	console.log("seeee", clientSecret);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				db.collection("users")
					.doc(user?.uid)
					.collection("orders")
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					});
				setSucceeded(true);
				setError(null);
				setProcessing(false);
				dispatch({
					type: "EMPTY_BASKET",
				});
				history.replace("/orders");
			});
	};

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};
	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout"> {basket?.length} items</Link>)
				</h1>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p> 123 Ract Lane</p>
						<p> Pennsburg, PA</p>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Reivew items and delivery</h3>
						<div className="payment__items">
							{basket?.map((item) => (
								<CheckoutProduct
									id={item.id}
									title={item.title}
									price={item.price}
									rating={item.rating}
									image={item.image}
								/>
							))}
						</div>
					</div>
				</div>
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment method</h3>
					</div>
					<div className="payment__details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => (
										<h3>
											Total Order
											<strong>{value}</strong>
										</h3>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button
									className="payment__buynow"
									disabled={processing || disabled || succeeded}
								>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
								{error && <div>{error}</div>}
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
