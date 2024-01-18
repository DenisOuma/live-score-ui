import React from "react";
import Image from "next/image";
import logoImage from "@/public/assets/images/spinbet-logo.svg";

export const Logo = () => {
	return (
		<div id="logo">
			<Image src={logoImage} alt="SpinBet" />
		</div>
	);
};
