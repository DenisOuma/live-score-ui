import { IconTemplate } from "@/app/Icon/IconTemplate";
import React from "react";
import Flag from "react-world-flags";

export const CountryFlag = () => {
	return (
		<div className="country-flag-icon">
			<div className="country-flag-properties">
				<Flag code={"cze"} height={16} />
				<div className="game-prop">
					<p className="country-name">Russia</p>
					<p className="country-flag-categ">Football National League</p>
				</div>
			</div>
			<div className="game-status">
				<p className="country-flag-categ-active">Finished</p>
				<div className="line-empty"></div>
				<IconTemplate svgName="carbon:text-link-analysis" svgWidth={20} />
			</div>
		</div>
	);
};
