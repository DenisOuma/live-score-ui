import { Logo } from "@/app/SHARED/Logo/Logo";
import { SearchInputPrime } from "@/app/SHARED/SearchInputPrime/SearchInputPrime";
import React from "react";

export const NavBar = () => {
	return (
		<nav id="navbar">
			<div className="navbar-content">
				<Logo />
				<div className="menu">
					<SearchInputPrime />
				</div>
			</div>
		</nav>
	);
};
