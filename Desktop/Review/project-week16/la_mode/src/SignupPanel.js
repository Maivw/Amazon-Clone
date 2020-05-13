import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup } from "./store/authentication";

class SignupPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			username: "",
			firstName: "",
			lastName: "",
			phoneNum: "",
			password: "",
			confirmPassword: "",
		};

		this.handleSignup = this.handleSignup.bind(this);
	}

	async handleSignup(e) {
		//1
		e.preventDefault();
		this.props.signup(
			this.state.email,
			this.state.username,
			this.state.firstName,
			this.state.lastName,
			this.state.phoneNum,
			this.state.password,
			this.state.confirmPassword
		);
	}

	update = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	render() {
		if (this.props.token) {
			debugger;
			return <Redirect to="/" />;
		}
		return (
			<main>
				<p>
					Please fill in all the required fields to create a new user account.
				</p>
				<form onSubmit={this.handleSignup}>
					<input
						type="text"
						placeholder="Email"
						value={this.state.email}
						onChange={this.update}
						name="email"
						id="email"
						required
					/>
					<input
						type="text"
						placeholder="User Name"
						value={this.state.userame}
						onChange={this.update}
						name="username"
						id="userame"
						required
					/>
					<input
						type="text"
						placeholder="First Name"
						value={this.state.firstName}
						onChange={this.update}
						name="firstName"
						id="firstName"
						required
					/>
					<input
						type="text"
						placeholder="Last Name"
						value={this.state.lastName}
						onChange={this.update}
						name="lastName"
						id="lastName"
						required
					/>
					<input
						type="text"
						placeholder="6093257689"
						value={this.state.phoneNum}
						onChange={this.update}
						pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
						name="phoneNum"
						id="phoneNum"
						required
					/>
					<input
						type="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.update}
						name="password"
						id="password"
						required
					/>
					<input
						type="password"
						placeholder="Password"
						value={this.state.comfirmPassword}
						onChange={this.update}
						name="confirmPassword"
						id="confirmPassword"
						autoComplete="nope"
						required
					/>
					<button type="submit">Sign up</button>
				</form>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.authentication.token,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		signup: (
			//2
			email,
			username,
			firstName,
			lastName,
			phoneNum,
			password,
			confirmPassword
		) =>
			dispatch(
				signup(
					email,
					username,
					firstName,
					lastName,
					phoneNum,
					password,
					confirmPassword
				)
			),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupPanel);
