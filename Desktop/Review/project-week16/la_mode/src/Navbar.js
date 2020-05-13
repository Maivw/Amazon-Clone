import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="nav-wrapper">
			<div className="container">
				<NavLink to="/" className="brand-logo">
					La_Mode
				</NavLink>

				<ul className="right">
					<li>
						<NavLink to="/">Shop</NavLink>
					</li>
					<li>
						<NavLink to="/cart">My cart</NavLink>
					</li>
					<li>
						<NavLink to="/cart">
							<i className="material-icons">shopping_cart</i>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
