import { IconButton } from "@/app/SHARED/IconButton/IconButton";
import { Logo } from "@/app/SHARED/Logo/Logo";
import { SearchInputPrime } from "@/app/SHARED/SearchInputPrime/SearchInputPrime";
import React from "react";

export const NavBar = () => {
	return (
		<nav id="navbar">
			<div className="navbar-content">
				<Logo />
				<SearchInputPrime />
				<div className="menu-options">
					<IconButton
						svgName="material-symbols:featured-seasonal-and-gifts-rounded"
						svgTitle="Gifts"
					/>
					<IconButton
						svgName="ph:trend-down"
						name="DROPING ODDS"
						svgTitle="Odds"
					/>
					<IconButton svgName="carbon:blog" name="BLOG" svgTitle="Blogs" />
					<IconButton
						svgName="ep:notification"
						name="NOTIFICATION"
						svgTitle="Notification"
					/>
				</div>
			</div>
		</nav>
	);
};
