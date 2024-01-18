import { IconTemplate } from "@/app/Icon/IconTemplate";
import React from "react";

export const SearchInputPrime = () => {
	return (
		<div className="search-input">
			<input type="text " className="" placeholder="Search match" />
			<IconTemplate
				className="icon-template"
				svgName="ic:baseline-search"
				svgWidth={25}
			/>
		</div>
	);
};
