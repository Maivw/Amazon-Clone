import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className="login">
			<Link to="/">
				<img
					src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
					alt="logo"
					className="login__logo"
				/>
			</Link>
			<div className="login__container">
				<h1>Sign in</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<h5>Password</h5>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className="login__signinButton"
						onClick={signIn}
						type="submit"
					>
						Sign in
					</button>
				</form>
				<p>
					By continuing, you agree to Amazon's Conditions of Use and Privacy
					Notice. Need help?
				</p>
				<button className="login__registerButton" onClick={register}>
					Create your Amazon account
				</button>
			</div>
		</div>
	);
}

export default Login;
