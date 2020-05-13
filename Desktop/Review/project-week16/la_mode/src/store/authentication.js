import { baseUrl } from "../config";

const SET_TOKEN = "la_mode/authentication/SET_TOKEN";
const REMOVE_TOKEN = "la_mode/authentication/REMOVE_TOKEN";
const TOKEN_KEY = "la_mode/authentication/token";

export const setToken = (token) => ({ type: SET_TOKEN, token });
export const removeToken = (token) => ({ type: REMOVE_TOKEN });

export const loadToken = () => async (dispatch) => {
	const token = window.localStorage.getItem(TOKEN_KEY);
	if (token) {
		dispatch(setToken(token));
	}
};

export const login = (email, password) => async (dispatch) => {
	const response = await fetch(`${baseUrl}/users/token`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, password }),
	});
	if (response.ok) {
		const { token } = await response.json();
		window.localStorage.setItem(TOKEN_KEY, token);
		dispatch(setToken(token));
	}
};

export const logout = () => async (dispatch, getState) => {
	const {
		authentication: { token },
	} = getState();
	const response = await fetch(`${baseUrl}/users`, {
		method: "delete",
		headers: { Authorization: `Bearer ${token}` },
	});

	if (response.ok) {
		window.localStorage.removeItem(TOKEN_KEY);
		dispatch(removeToken());
	}
};

export const signup = (
	//3
	email,
	username,
	firstName,
	lastName,
	phoneNum,
	password,
	confirmPassword
) => async (dispatch) => {
	debugger;
	const response = await fetch(`${baseUrl}/users`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			email,
			username,
			firstName,
			lastName,
			phoneNum,
			password,
			confirmPassword,
		}),
	});
	if (response.ok) {
		const { token } = await response.json();
		window.localStorage.setItem(TOKEN_KEY, token);
		dispatch(setToken(token));
	}
};
export default function reducer(state = {}, action) {
	switch (action.type) {
		case SET_TOKEN: {
			return {
				...state,
				token: action.token,
			};
		}

		case REMOVE_TOKEN: {
			const newState = { ...state };
			delete newState.token;
			return newState;
		}

		default:
			return state;
	}
}
