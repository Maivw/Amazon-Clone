import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import LoginPanel from "./LoginPanel";
import Home from "./Home";
import Navbar from "./Navbar";
import { loadToken } from "./store/authentication";
import SignupPanel from "./SignupPanel";

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			rest.needLogin === true ? (
				<Redirect to="/login" />
			) : (
				<Component {...props} />
			)
		}
	/>
);

const ProtectedRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			rest.needLogin === true ? <Component {...props} /> : <Redirect to="/" />
		}
	/>
);
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded: false,
		};
	}

	async componentDidMount() {
		this.setState({ loaded: true });
		this.props.loadToken();
	}

	render() {
		return (
			<BrowserRouter>
				<Navbar />
				<Switch>
					{/* <Route path="/signup" component={SignupPanel} /> */}
					{/* <Route path="/login" component={LoginPanel} /> */}
					<ProtectedRoute
						path="/signup"
						exact={true}
						needLogin={this.props.needLogin}
						component={SignupPanel}
					/>
					<ProtectedRoute
						path="/login"
						exact={true}
						needLogin={this.props.needLogin}
						component={LoginPanel}
					/>
				</Switch>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		needLogin: !state.authentication.token,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		loadToken: () => dispatch(loadToken()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export const ProtectedRoute = ({
// 	component: Component,
// 	path,
// 	currentUserId,
// 	exact,
// }) => {
// 	return (
// 		<Route
// 			path={path}
// 			exact={exact}
// 			render={(props) =>
// 				currentUserId ? <Component {...props} /> : <Redirect to="/login" />
// 			}
// 		/>
// 	);
// };

// export const AuthRoute = ({
// 	component: Component,
// 	path,
// 	currentUserId,
// 	exact,
// }) => {
// 	return (
// 		<Route
// 			path={path}
// 			exact={exact}
// 			render={(props) =>
// 				currentUserId ? <Redirect to="/" /> : <Component {...props} />
// 			}
// 		/>
// 	);
// };
