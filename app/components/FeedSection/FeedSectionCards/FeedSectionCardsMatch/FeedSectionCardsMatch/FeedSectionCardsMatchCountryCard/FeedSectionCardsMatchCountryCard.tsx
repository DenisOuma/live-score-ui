import { IconTemplate } from "@/app/Icon/IconTemplate";
import { CountryFlag } from "@/app/SHARED/Flag/CountryFlag";
import React from "react";

export const FeedSectionCardsMatchCountryCard = () => {
	return (
		<div className="country-game">
			<CountryFlag />
			<div className="teams-play">
				<div className="team-prop">
					<div className="country-game-status">
						<p className="game-time">17:00</p>
						<p className="game-time-status">FT</p>
					</div>
					<div className="line-empty-team"></div>

					<div className="teams-play-names">
						<div className="team-name">
							<IconTemplate
								className="icon-team"
								svgName="ph:soccer-ball-fill"
								svgWidth={16}
								svgColor="#89c24a"
							/>
							<p>FK Tyumen</p>
						</div>
						<div className="team-name">
							<IconTemplate
								className="icon-team"
								svgName="ph:soccer-ball-fill"
								svgWidth={16}
								svgColor="#ffde09"
							/>
							<p>Luch-Energiya Vladivostok</p>
						</div>
					</div>
				</div>
				<div className="game-status">
					<div className="team-score-num">
						<p className="country-flag-categ-active">0</p>
						<p className="country-flag-categ-active">4</p>
					</div>
					<div className="line-empty"></div>
					<IconTemplate svgName="mi:notification" svgWidth={20} />
				</div>
			</div>
		</div>
	);
};
